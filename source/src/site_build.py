#!/usr/bin/env python3
"""Builds the standalone installable site (no Claude account needed) into dist/site/.

Usage: python3 src/site_build.py   (run src/build.py first; icons come from src/icons/)
"""
import hashlib, json, shutil, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "dist/site"
tmp = ROOT / "dist/_page.html"
subprocess.run([sys.executable, str(ROOT / "src/build.py"), str(tmp)], check=True)
page = tmp.read_text(); tmp.unlink()
version = hashlib.sha1(page.encode()).hexdigest()[:10]

head = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#14171c">
<meta name="description" content="Duolifto: exercise library, workout builder, weight tracking, goals and programs.">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Duolifto">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icon-192.png">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>
<script>window.__STANDALONE__ = true;</script>
</head>
<body>
"""
tail = """
<script>if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));</script>
</body>
</html>
"""
if OUT.exists(): shutil.rmtree(OUT)
OUT.mkdir(parents=True)
(OUT / "index.html").write_text(head + page + tail)
(OUT / "manifest.webmanifest").write_text(json.dumps({
    "name": "Duolifto", "short_name": "Duolifto", "start_url": "./", "scope": "./", "display": "standalone",
    "background_color": "#0e1013", "theme_color": "#14171c", "orientation": "portrait",
    "icons": [{"src": "icon-192.png", "sizes": "192x192", "type": "image/png"},
              {"src": "icon-512.png", "sizes": "512x512", "type": "image/png"},
              {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}]}, indent=1))
(OUT / "sw.js").write_text(f"""const CACHE = 'duolifto-{version}';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
self.addEventListener('install', e => {{ e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); }});
self.addEventListener('activate', e => {{ e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); }});
self.addEventListener('fetch', e => {{
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin === location.origin && e.request.mode === 'navigate') {{
    e.respondWith(fetch(e.request).then(r => {{ const copy = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); return r; }}).catch(() => caches.match('./index.html')));
    return;
  }}
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {{
    if (r.ok || r.type === 'opaque') {{ const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }}
    return r;
  }})));
}});
""")
(OUT / ".nojekyll").write_text("")
for f in (ROOT / "src/icons").glob("*.png"):
    shutil.copy(f, OUT / f.name)
print("site ->", OUT, "version", version, sorted(p.name for p in OUT.iterdir()))
