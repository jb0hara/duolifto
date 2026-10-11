#!/usr/bin/env python3
"""Builds data/exercises.json from data/exercises.txt and inlines all data into the app page.

Usage: python3 src/build.py [output.html]
"""
import colorsys, json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
tax = json.loads((ROOT / "data/taxonomy.json").read_text())
programs = json.loads((ROOT / "data/programs.json").read_text())

def hsl(h, s, l):
    r, g, b = colorsys.hls_to_rgb((h % 360) / 360, l / 100, s / 100)
    return "#%02x%02x%02x" % (round(r * 255), round(g * 255), round(b * 255))

# Colours: group = deep solid, sub-category = mid shade (stepped per sub), muscle = light tint (stepped per muscle)
muscle_info = {}
for g in tax["groups"]:
    h = g["hue"]
    g["color"] = hsl(h, 68, 40)
    n = len(g["subgroups"])
    for i, sg in enumerate(g["subgroups"]):
        t = i / max(1, n - 1)
        sg["color"] = hsl(h + (t - 0.5) * 16, 62, 50 + t * 10)
        m = len(sg["muscles"])
        muscles = []
        for j, (mid, mname) in enumerate(sg["muscles"]):
            u = j / max(1, m - 1) if m > 1 else 0.5
            color = hsl(h + (t - 0.5) * 16, 70, 76 + u * 10)
            muscles.append({"id": mid, "name": mname, "color": color})
            muscle_info[mid] = (g["id"], sg["id"], mname)
        sg["muscles"] = muscles

aliases = {k: v.split() for k, v in tax["aliases"].items()}

def expand(s):
    out = []
    for tok in s.split():
        for m in aliases.get(tok, [tok]):
            if m not in muscle_info:
                raise SystemExit(f"Unknown muscle code: {m}")
            if m not in out:
                out.append(m)
    return out

def slug(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower().replace("'", "")).strip("-")

def recommend(pattern, mech, equip, tags):
    iso_hold = any(t in tags for t in ("isometric",))
    if pattern == "olympic":
        return {"strength": "5 x 2-3", "hypertrophy": "4 x 3-5", "endurance": "6 x 2 (EMOM)", "default": "5 x 3"}
    if pattern == "plyo":
        return {"strength": "4 x 3-5", "hypertrophy": "4 x 5-6", "endurance": "3 x 10", "default": "4 x 5"}
    if pattern == "conditioning":
        return {"strength": "6 x 20s", "hypertrophy": "5 x 30s", "endurance": "4 x 60s", "default": "5 x 30s on / 30s off"}
    if pattern == "carry":
        return {"strength": "4 x 20m heavy", "hypertrophy": "3 x 30m", "endurance": "3 x 60m", "default": "3 x 30-40m"}
    if iso_hold:
        return {"strength": "4 x 15-20s", "hypertrophy": "3 x 30-45s", "endurance": "3 x 60s", "default": "3 x 30-45s"}
    if pattern == "core":
        return {"strength": "4 x 6-8", "hypertrophy": "3 x 10-15", "endurance": "3 x 20+", "default": "3 x 10-15"}
    if mech == "c" and equip in ("barbell", "trap-bar") and pattern in ("squat", "hinge", "push_h", "push_v", "pull_h"):
        return {"strength": "5 x 3-5", "hypertrophy": "4 x 6-10", "endurance": "3 x 12-15", "default": "4 x 6-8"}
    if mech == "c":
        return {"strength": "4 x 5-6", "hypertrophy": "3 x 8-12", "endurance": "3 x 15-20", "default": "3 x 8-12"}
    return {"strength": "3 x 6-8", "hypertrophy": "3 x 10-15", "endurance": "2 x 20-25", "default": "3 x 12-15"}

exercises, seen = [], set()
for line in (ROOT / "data/exercises.txt").read_text().splitlines():
    if not line.strip() or line.startswith("#"):
        continue
    parts = [p.strip() for p in line.split("|")]
    if len(parts) != 7:
        raise SystemExit(f"Bad line ({len(parts)} fields): {line}")
    name, equip, pattern, mech, prim, sec, extra = parts
    if equip not in tax["equipment"] or pattern not in tax["patterns"] or mech not in "ci":
        raise SystemExit(f"Bad field in: {line}")
    eid = slug(name)
    if eid in seen:
        raise SystemExit(f"Duplicate id {eid}")
    seen.add(eid)
    p, s = expand(prim), [m for m in expand(sec) if m not in expand(prim)]
    groups = []
    subgroups = []
    for m in p + s:
        g, sg, _ = muscle_info[m]
        if g not in groups: groups.append(g)
        if sg not in subgroups: subgroups.append(sg)
    tags = [t.strip() for t in extra.split(",") if t.strip()]
    exercises.append({
        "id": eid, "name": name, "equipment": equip, "pattern": pattern,
        "type": "compound" if mech == "c" else "isolation",
        "primary": p, "secondary": s, "groups": groups, "subgroups": subgroups,
        "primaryGroup": muscle_info[p[0]][0],
        "tags": tags, "rec": recommend(pattern, mech, equip, tags),
    })

ids = {e["id"] for e in exercises}
for prog in programs:
    for day in prog["days"]:
        for ex in day["exercises"]:
            if ex[0] not in ids:
                raise SystemExit(f"Program {prog['id']} references unknown exercise {ex[0]}")

(ROOT / "data/exercises.json").write_text(json.dumps(exercises, indent=1))
(ROOT / "data/taxonomy.colored.json").write_text(json.dumps(tax, indent=1))

out = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "dist/gym-app.html"
out.parent.mkdir(parents=True, exist_ok=True)
page = (ROOT / "src/app.html").read_text()
page = page.replace("/*__DATA__*/", "const TAX=%s;\nconst EXERCISES=%s;\nconst PROGRAMS=%s;" % (
    json.dumps(tax, separators=(",", ":")), json.dumps(exercises, separators=(",", ":")), json.dumps(programs, separators=(",", ":"))))
out.write_text(page)
print(f"{len(exercises)} exercises, {len(programs)} programs -> {out} ({out.stat().st_size//1024} KB)")
