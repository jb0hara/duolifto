// ---------- body map (front + back silhouette, left halves mirrored) ----------
const BODY_OUTLINE = 'M92 52 L92 60 Q76 66 66 70 Q52 74 50 90 Q46 104 48 120 Q46 140 46 156 Q40 176 42 200 Q44 216 46 232 Q44 244 48 252 Q54 256 56 248 Q56 236 56 226 Q60 204 62 184 Q66 168 66 150 L68 150 Q70 170 70 190 Q64 204 64 214 Q60 260 64 300 Q66 316 66 330 Q60 356 64 384 Q66 400 66 410 Q62 418 70 420 L82 420 Q84 412 82 404 Q86 378 88 350 Q90 334 90 324 Q94 290 96 250 L99 232 L100 232 L100 52 Z';
const BODY = {
  front: [
    ['trap_upper', 'M92 58 L92 66 Q82 70 72 72 Q80 64 92 58Z'],
    ['delt_front', 'M72 72 Q60 74 56 86 Q55 96 58 104 L66 96 Q70 84 77 77 Z'],
    ['delt_side', 'M56 86 Q50 92 50 104 L58 104 Q55 96 56 86Z'],
    ['pec_upper', 'M78 75 Q90 72 99 74 L99 88 Q88 88 72 92 Q72 82 78 75Z'],
    ['pec_mid', 'M72 92 Q88 88 99 88 L99 104 Q86 108 70 104 Z'],
    ['pec_lower', 'M70 104 Q86 108 99 104 L99 114 Q90 120 78 118 Q72 114 70 104Z'],
    ['pec_minor', 'M82 80 Q88 79 94 81 L93 87 Q87 87 82 89Z'],
    ['serratus', 'M66 108 L74 118 L72 136 L66 128 Z'],
    ['rectus_abs', 'M88 122 L99 122 L99 170 L89 170 Z'],
    ['tva', 'M80 170 L99 170 L99 204 Q86 202 80 194Z'],
    ['obl_ext', 'M70 124 L86 122 L88 170 L80 170 Q74 160 70 140Z'],
    ['obl_int', 'M72 152 L80 170 L80 194 Q74 186 72 172Z'],
    ['bi_long', 'M56 106 Q50 118 51 136 Q54 146 58 148 L59 106Z'],
    ['bi_short', 'M59 106 L58 148 Q63 146 65 134 Q66 118 64 106Z'],
    ['brachialis', 'M50 134 Q49 146 53 154 L57 150 Q52 144 51 136Z'],
    ['brachiorad', 'M48 158 Q44 170 44 186 L50 186 Q50 168 54 158Z'],
    ['wrist_flex', 'M54 158 Q50 170 50 186 L52 214 Q58 200 60 180 Q60 166 58 156Z'],
    ['tfl', 'M66 206 Q64 220 66 234 L72 222 L74 208Z'],
    ['iliopsoas', 'M82 204 L95 208 L90 226 L82 218Z'],
    ['rect_fem', 'M76 224 Q80 214 86 222 L88 290 Q84 298 80 290Z'],
    ['vas_lat', 'M66 236 Q62 270 68 304 L76 306 Q74 280 76 224 L72 222Z'],
    ['vas_int', 'M76 290 L80 290 L82 306 L76 306Z'],
    ['vas_med', 'M86 266 Q95 282 91 306 L82 306 Q86 296 88 290Z'],
    ['add_long', 'M88 224 L96 212 L98 232 L92 262 L88 256Z'],
    ['add_mag', 'M92 262 L98 232 L98 268 L94 280Z'],
    ['tib_ant', 'M70 338 Q66 360 70 390 L74 390 Q74 362 76 338Z'],
    ['gastroc', 'M80 340 Q86 352 84 380 L78 380 Q78 360 80 340Z'],
    ['soleus', 'M66 362 Q64 380 68 398 L70 390 Q66 376 66 362Z'],
  ],
  back: [
    ['trap_upper', 'M92 56 L99 54 L99 80 Q86 74 72 74 Q82 66 92 56Z'],
    ['trap_mid', 'M74 76 Q88 76 99 82 L99 104 Q90 96 80 90Z'],
    ['trap_lower', 'M84 98 L99 104 L99 140 Q92 124 84 98Z'],
    ['supraspinatus', 'M76 78 L86 80 L84 87 L74 85Z'],
    ['rhomboids', 'M86 86 L96 90 L96 112 L88 102Z'],
    ['delt_rear', 'M60 80 Q52 90 52 104 L60 102 Q64 90 72 82Z'],
    ['delt_side', 'M52 88 Q48 96 49 106 L52 104 Q52 94 56 86Z'],
    ['infraspinatus', 'M74 90 Q66 96 68 108 L82 110 Q84 100 80 92Z'],
    ['teres_minor', 'M66 104 L68 111 L78 114 L72 108Z'],
    ['teres_major', 'M66 112 L82 114 L80 122 L68 120Z'],
    ['subscapularis', 'M62 108 L66 112 L66 120 L62 118Z'],
    ['lats', 'M68 122 L82 116 Q90 140 99 150 L99 176 Q84 172 74 158 Q68 140 68 122Z'],
    ['erectors', 'M92 142 L99 142 L99 206 L93 204 Q90 172 92 142Z'],
    ['ql', 'M80 176 Q86 180 92 184 L93 204 L82 200Z'],
    ['tri_long', 'M60 104 L58 150 Q64 146 66 132 Q66 116 64 104Z'],
    ['tri_lat', 'M54 104 Q48 120 50 138 L56 146 L58 106Z'],
    ['tri_med', 'M51 140 L56 150 L62 150 L58 144Z'],
    ['wrist_ext', 'M46 160 Q42 176 44 190 L50 214 Q54 196 56 176 L54 158Z'],
    ['brachiorad', 'M56 158 Q58 170 58 182 L56 176 Z'],
    ['glute_med', 'M68 196 Q72 190 82 192 L94 202 Q80 202 70 206Z'],
    ['glute_min', 'M65 204 L70 206 L68 218Z'],
    ['glute_max', 'M70 206 Q66 228 72 246 Q86 252 99 246 L99 208 Q86 202 70 206Z'],
    ['bf', 'M68 252 Q64 284 72 318 L80 318 L80 254Z'],
    ['semit', 'M80 254 L80 318 L88 318 Q90 286 88 254Z'],
    ['semim', 'M88 254 Q92 290 88 318 L94 318 Q98 286 96 252Z'],
    ['add_mag', 'M96 252 L99 250 L99 290 L97 288Z'],
    ['gastroc', 'M70 336 Q64 352 68 372 L80 376 L80 338Z M80 338 L80 376 L90 372 Q94 352 88 336Z'],
    ['soleus', 'M68 372 Q70 392 76 402 L86 402 Q90 390 90 372 L80 376Z'],
  ]
};
function pathBox(d) {
  const n = d.match(/-?\d+(\.\d+)?/g).map(Number), xs = [], ys = [];
  for (let i = 0; i + 1 < n.length; i += 2) { xs.push(n[i], 200 - n[i]); ys.push(n[i + 1]); }
  return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
}
// Shows only the views (front/back) that contain worked muscles, zoomed in on that area.
function bodyMap(primary, secondary) {
  const P = new Set(primary), S = new Set(secondary);
  const fill = id => P.has(id) ? SG[M[id].sub].color : S.has(id) ? M[id].color : null;
  const views = ['front', 'back'].map(key => {
    const hits = BODY[key].filter(([id]) => P.has(id) || S.has(id));
    const prim = BODY[key].filter(([id]) => P.has(id));
    if (!hits.length) return null;
    let [x0, y0, x1, y1] = (prim.length ? prim : hits).map(([, d]) => pathBox(d)).reduce((a, b) => [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[2], b[2]), Math.max(a[3], b[3])]);
    const padd = 22; x0 -= padd; y0 -= padd; x1 += padd; y1 += padd;
    let w = x1 - x0, h = y1 - y0;
    const minW = 120, minH = 110;
    if (w < minW) { x0 -= (minW - w) / 2; w = minW; }
    if (h < minH) { y0 -= (minH - h) / 2; h = minH; }
    if (h > w * 1.6) { const nw = h / 1.6; x0 -= (nw - w) / 2; w = nw; }
    if (w > h * 1.4) { const nh = w / 1.4; y0 -= (nh - h) / 2; h = nh; }
    const parts = BODY[key].map(([id, d]) => { const f = fill(id); return `<path d="${d}" class="${f ? 'hl' : 'mu'}" ${f ? `style="fill:${f}"` : ''}><title>${esc(M[id].name)}</title></path>`; }).join('');
    const half = `<path d="${BODY_OUTLINE}" class="sil"/>${parts}`;
    return { key, prim: prim.length, svg: `<figure class="bmv"><svg class="bodymap" viewBox="${x0.toFixed(1)} ${y0.toFixed(1)} ${w.toFixed(1)} ${h.toFixed(1)}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${key} view"><ellipse cx="100" cy="30" rx="16" ry="20" class="sil"/>${half}<g transform="translate(200 0) scale(-1 1)">${half}</g></svg><figcaption>${key === 'front' ? 'Front' : 'Back'}</figcaption></figure>` };
  }).filter(Boolean).sort((a, b) => b.prim - a.prim).filter((v, i, all) => v.prim || !all[0].prim);
  return `<div class="bmrow" role="img" aria-label="Muscles worked: ${esc(primary.concat(secondary).map(m => M[m].name).join(', '))}">${views.map(v => v.svg).join('')}</div>`;
}

// ---------- movement diagrams (side or front view stick figures, start and finish) ----------
const SIDE = { s: [100, 50], e: [100, 72], w: [100, 94], hp: [100, 90], k: [100, 120], a: [100, 150] };
const FRONT = { n: [100, 48], hm: [100, 92], s: [86, 54], s2: [114, 54], e: [84, 76], w: [84, 98], e2: [116, 76], w2: [116, 98], hp: [92, 92], hp2: [108, 92], k: [90, 121], k2: [110, 121], a: [90, 150], a2: [110, 150] };
const side = o => Object.assign({}, SIDE, o), front = o => Object.assign({}, FRONT, o);
const BENCH_FLAT = '<rect x="50" y="113" width="100" height="7" rx="2" class="pr"/><rect x="62" y="120" width="5" height="30" class="pr"/><rect x="134" y="120" width="5" height="30" class="pr"/>';
const LYING = { s: [80, 106], hp: [120, 106], k: [140, 116], a: [146, 150] };
const PROPS = {
  topbar: '<line x1="60" y1="12" x2="140" y2="12" class="pr-l"/>',
  bench: BENCH_FLAT,
  box: '<rect x="108" y="128" width="44" height="22" rx="2" class="pr"/>',
  seat: '<rect x="62" y="122" width="44" height="6" rx="2" class="pr"/><rect x="80" y="128" width="6" height="22" class="pr"/>',
  low: '<rect x="40" y="100" width="40" height="8" rx="2" class="pr"/><rect x="56" y="108" width="6" height="42" class="pr"/>',
  dipbar: '<line x1="80" y1="100" x2="124" y2="100" class="pr-l"/><line x1="122" y1="100" x2="122" y2="150" class="pr-l"/>',
  step: '<rect x="80" y="142" width="40" height="8" rx="1" class="pr"/>',
  incline: '<path d="M80 94 L130 122 L152 122" class="pad"/><line x1="132" y1="124" x2="132" y2="150" class="pr-l"/><line x1="92" y1="104" x2="92" y2="150" class="pr-l"/>',
  decline: '<path d="M74 130 L126 110" class="pad"/><line x1="96" y1="124" x2="96" y2="150" class="pr-l"/><line x1="126" y1="112" x2="126" y2="150" class="pr-l"/><circle cx="152" cy="124" r="5" class="pr"/>',
  prone: '<path d="M78 104 L126 132" class="pad"/><line x1="98" y1="118" x2="98" y2="150" class="pr-l"/><line x1="122" y1="132" x2="122" y2="150" class="pr-l"/>',
  upright: '<path d="M88 70 L92 124 L126 124" class="pad"/><line x1="106" y1="126" x2="106" y2="150" class="pr-l"/>',
  preacher: '<path d="M104 100 L132 124" class="pad"/><line x1="118" y1="114" x2="118" y2="150" class="pr-l"/><path d="M70 124 L104 124" class="pad"/><line x1="86" y1="126" x2="86" y2="150" class="pr-l"/>',
  declinesit: '<path d="M58 142 L136 108" class="pad"/><line x1="128" y1="112" x2="128" y2="150" class="pr-l"/><circle cx="150" cy="114" r="5" class="pr"/>',
  hyper: '<line x1="96" y1="106" x2="150" y2="140" class="pr-l"/><line x1="122" y1="124" x2="122" y2="150" class="pr-l"/>',
};
const INC = { s: [90, 86], hp: [122, 110], k: [148, 118], a: [150, 150] };
const DIAGRAMS = {
  squat: { props: [], cable: null, frames: [side({ e: [88, 64], w: [96, 50] }), side({ hp: [86, 118], k: [122, 128], s: [104, 80], e: [94, 94], w: [102, 80] })], load: 's' },
  hinge: { frames: [side({ w: [102, 94] }), side({ hp: [86, 92], k: [104, 122], s: [118, 66], e: [118, 88], w: [118, 110] })] },
  lunge: { frames: [side({ k: [104, 120], a: [104, 150], k2: [96, 120], a2: [96, 150] }), side({ hp: [100, 108], s: [100, 68], e: [100, 90], w: [100, 112], k: [124, 124], a: [126, 150], k2: [86, 142], a2: [66, 148] })] },
  step_up: { props: ['box'], frames: [side({ hp: [98, 100], s: [100, 60], e: [100, 82], w: [100, 104], k: [120, 106], a: [124, 128], k2: [94, 126], a2: [92, 150] }), side({ hp: [124, 70], s: [124, 30], e: [124, 52], w: [124, 74], k: [126, 100], a: [126, 128], k2: [134, 88], a2: [128, 116] })] },
  hip_thrust: { props: ['low'], frames: [{ s: [66, 98], hp: [92, 128], k: [120, 108], a: [124, 150], e: [80, 114], w: [92, 126] }, { s: [66, 96], hp: [98, 100], k: [124, 104], a: [124, 150], e: [84, 92], w: [98, 98] }] },
  bench_press: { props: ['bench'], frames: [Object.assign({}, LYING, { e: [80, 84], w: [80, 62] }), Object.assign({}, LYING, { e: [70, 114], w: [82, 98] })] },
  pushup: { frames: [{ a: [152, 148], k: [130, 140], hp: [110, 132], s: [70, 116], e: [70, 132], w: [70, 148] }, { a: [152, 148], k: [130, 143], hp: [110, 138], s: [70, 138], e: [86, 130], w: [70, 148] }] },
  dip: { props: ['dipbar'], frames: [{ s: [100, 58], e: [100, 80], w: [100, 100], hp: [100, 98], k: [96, 124], a: [110, 134] }, { s: [104, 80], e: [84, 92], w: [100, 100], hp: [96, 118], k: [92, 144], a: [110, 150] }] },
  overhead_press: { frames: [side({ e: [104, 64], w: [106, 48] }), side({ e: [102, 28], w: [102, 6] })] },
  row_bent: { frames: [side({ hp: [86, 92], k: [104, 122], s: [118, 66], e: [118, 88], w: [118, 110] }), side({ hp: [86, 92], k: [104, 122], s: [118, 66], e: [96, 74], w: [108, 92] })] },
  row_seated: { cable: [180, 106], frames: [{ hp: [80, 130], s: [86, 90], k: [112, 116], a: [136, 128], e: [106, 96], w: [128, 104] }, { hp: [80, 130], s: [80, 90], k: [112, 116], a: [136, 128], e: [60, 100], w: [84, 104] }] },
  pulldown: { props: ['seat'], cable: [100, -16], frames: [{ hp: [84, 120], s: [86, 80], k: [112, 120], a: [116, 150], e: [92, 56], w: [96, 34] }, { hp: [84, 120], s: [84, 80], k: [112, 120], a: [116, 150], e: [74, 98], w: [92, 82] }] },
  pullup: { props: ['topbar'], frames: [{ w: [100, 14], e: [100, 36], s: [100, 58], hp: [100, 98], k: [98, 126], a: [92, 148] }, { w: [100, 14], e: [88, 40], s: [100, 32], hp: [100, 72], k: [98, 100], a: [92, 122] }] },
  curl: { frames: [side({ e: [100, 74], w: [102, 96] }), side({ e: [102, 74], w: [116, 56] })] },
  pushdown: { cable: [150, -10], frames: [side({ e: [104, 74], w: [122, 64] }), side({ e: [102, 74], w: [106, 96] })] },
  overhead_ext: { frames: [side({ e: [106, 28], w: [88, 40] }), side({ e: [106, 28], w: [108, 6] })] },
  lying_ext: { props: ['bench'], frames: [Object.assign({}, LYING, { e: [82, 84], w: [82, 62] }), Object.assign({}, LYING, { e: [82, 84], w: [62, 96] })] },
  lateral_raise: { frames: [front({}), front({ e: [64, 54], w: [42, 56], e2: [136, 54], w2: [158, 56] })] },
  front_raise: { frames: [side({}), side({ e: [122, 52], w: [144, 50] })] },
  rear_fly: { frames: [side({ hp: [86, 92], k: [104, 122], s: [118, 66], e: [120, 88], w: [122, 110] }), side({ hp: [86, 92], k: [104, 122], s: [118, 66], e: [110, 62], w: [100, 54] })] },
  fly: { frames: [front({ e: [66, 62], w: [46, 70], e2: [134, 62], w2: [154, 70] }), front({ e: [84, 74], w: [98, 82], e2: [116, 74], w2: [102, 82] })] },
  shrug: { frames: [front({}), front({ n: [100, 44], s: [86, 47], s2: [114, 47], e: [84, 69], w: [84, 91], e2: [116, 69], w2: [116, 91] })] },
  crunch: { frames: [{ hp: [100, 146], s: [60, 146], k: [124, 124], a: [140, 148], e: [52, 134], w: [56, 142] }, { hp: [100, 146], s: [72, 126], k: [124, 124], a: [140, 148], e: [66, 114], w: [62, 124] }] },
  leg_raise: { props: ['topbar'], frames: [{ w: [100, 14], e: [100, 36], s: [100, 58], hp: [100, 98], k: [100, 124], a: [100, 150] }, { w: [100, 14], e: [100, 36], s: [98, 58], hp: [100, 98], k: [126, 94], a: [152, 96] }] },
  plank: { hold: true, frames: [{ s: [62, 124], e: [62, 146], w: [80, 146], hp: [104, 128], k: [128, 136], a: [152, 146] }, { s: [62, 124], e: [62, 146], w: [80, 146], hp: [104, 128], k: [128, 136], a: [152, 146] }] },
  rotation: { frames: [front({ e: [122, 40], w: [140, 24], e2: [124, 48], w2: [142, 28] }), front({ e: [80, 76], w: [64, 96], e2: [84, 80], w2: [66, 98] })] },
  carry: { frames: [side({ k: [106, 120], a: [112, 150], k2: [96, 120], a2: [88, 150] }), side({ k: [96, 120], a: [88, 150], k2: [106, 120], a2: [112, 150] })] },
  calf_raise: { props: ['step'], frames: [side({ s: [100, 42], hp: [100, 82], k: [100, 112], a: [100, 142], e: [100, 64], w: [100, 86] }), side({ s: [100, 34], hp: [100, 74], k: [100, 104], a: [102, 134], e: [100, 56], w: [100, 78] })] },
  leg_extension: { props: ['seat'], frames: [{ hp: [86, 116], s: [82, 76], k: [116, 118], a: [118, 148], e: [88, 98], w: [96, 114] }, { hp: [86, 116], s: [82, 76], k: [116, 118], a: [146, 112], e: [88, 98], w: [96, 114] }] },
  leg_curl: { frames: [{ s: [60, 116], hp: [100, 118], k: [130, 118], a: [160, 120], e: [52, 130], w: [64, 128] }, { s: [60, 116], hp: [100, 118], k: [130, 118], a: [138, 90], e: [52, 130], w: [64, 128] }] },
  olympic: { frames: [side({ hp: [84, 104], s: [112, 78], k: [108, 124], e: [112, 100], w: [112, 122] }), side({ hp: [92, 110], k: [112, 128], s: [98, 70], e: [114, 78], w: [104, 66] })] },
  swing: { frames: [side({ hp: [84, 94], k: [102, 122], s: [118, 70], e: [108, 92], w: [98, 110] }), side({ e: [122, 56], w: [144, 58] })] },
  jump: { frames: [side({ hp: [86, 118], k: [122, 128], s: [108, 82], e: [92, 100], w: [80, 112] }), side({ a: [100, 124], k: [100, 94], hp: [100, 64], s: [100, 24], e: [104, 2], w: [108, -18] })] },
  back_extension: { props: ['hyper'], frames: [{ hp: [100, 102], k: [124, 116], a: [148, 132], s: [86, 138], e: [90, 126], w: [96, 122] }, { hp: [100, 102], k: [124, 116], a: [148, 132], s: [66, 80], e: [72, 94], w: [80, 90] }] },
  kickback: { cable: [20, 140], frames: [{ s: [122, 88], hp: [92, 96], e: [128, 108], w: [132, 124], k: [96, 122], a: [96, 150], k2: [98, 124], a2: [92, 150] }, { s: [122, 88], hp: [92, 96], e: [128, 108], w: [132, 124], k: [96, 122], a: [96, 150], k2: [64, 100], a2: [40, 94] }] },
  abduction: { frames: [front({}), front({ k2: [124, 118], a2: [140, 146] })] },
  bench_incline: { props: ['incline'], frames: [Object.assign({}, INC, { e: [90, 64], w: [90, 42] }), Object.assign({}, INC, { e: [76, 102], w: [86, 86] })] },
  bench_decline: { props: ['decline'], frames: [{ s: [84, 122], hp: [118, 102], k: [142, 98], a: [150, 120], e: [84, 100], w: [84, 78] }, { s: [84, 122], hp: [118, 102], k: [142, 98], a: [150, 120], e: [72, 124], w: [82, 108] }] },
  fly_lying: { props: ['bench'], frames: [Object.assign({}, LYING, { e: [80, 84], w: [80, 62] }), Object.assign({}, LYING, { e: [76, 104], w: [74, 124] })] },
  fly_incline: { props: ['incline'], frames: [Object.assign({}, INC, { e: [90, 64], w: [90, 42] }), Object.assign({}, INC, { e: [84, 106], w: [80, 126] })] },
  row_chest: { props: ['prone'], frames: [{ s: [84, 94], hp: [118, 114], k: [140, 124], a: [148, 150], e: [86, 116], w: [88, 138] }, { s: [84, 94], hp: [118, 114], k: [140, 124], a: [148, 150], e: [104, 90], w: [96, 110] }] },
  press_seated: { props: ['upright'], frames: [{ hp: [98, 118], s: [96, 78], k: [126, 120], a: [128, 150], e: [110, 92], w: [108, 72] }, { hp: [98, 118], s: [96, 78], k: [126, 120], a: [128, 150], e: [100, 54], w: [100, 32] }] },
  curl_incline: { props: ['incline'], frames: [Object.assign({}, INC, { e: [88, 110], w: [86, 132] }), Object.assign({}, INC, { e: [88, 110], w: [106, 98] })] },
  curl_preacher: { props: ['preacher'], frames: [{ hp: [90, 120], s: [94, 80], k: [118, 122], a: [120, 150], e: [118, 104], w: [136, 120] }, { hp: [90, 120], s: [94, 80], k: [118, 122], a: [120, 150], e: [118, 104], w: [112, 82] }] },
  bench_dip: { props: ['low'], frames: [{ s: [84, 62], e: [78, 82], w: [72, 100], hp: [90, 102], k: [118, 118], a: [146, 148] }, { s: [86, 86], e: [66, 82], w: [72, 100], hp: [90, 126], k: [118, 130], a: [146, 148] }] },
  situp_decline: { props: ['declinesit'], frames: [{ s: [70, 132], hp: [106, 116], k: [128, 98], a: [148, 110], e: [80, 124], w: [74, 120] }, { s: [92, 78], hp: [106, 116], k: [128, 98], a: [148, 110], e: [98, 96], w: [92, 90] }] },
  cardio: { frames: [front({}), front({ e: [70, 34], w: [62, 12], e2: [130, 34], w2: [138, 12], k: [80, 120], a: [72, 150], k2: [120, 120], a2: [128, 150] })] },
};
function stick(p, equip, d) {
  const L = (a, b, cls = 'bone') => p[a] && p[b] ? `<line x1="${p[a][0]}" y1="${p[a][1]}" x2="${p[b][0]}" y2="${p[b][1]}" class="${cls}"/>` : '';
  const top = p.n || p.s, bot = p.hm || p.hp;
  const dx = top[0] - bot[0], dy = top[1] - bot[1], len = Math.hypot(dx, dy) || 1;
  const hd = p.hd || [top[0] + dx / len * 12, top[1] + dy / len * 12];
  let s = '';
  if (d.cable && p.w) s += `<line x1="${d.cable[0]}" y1="${d.cable[1]}" x2="${p.w[0]}" y2="${p.w[1]}" class="cable"/>`;
  s += L('k2', 'a2', 'bone far') + L(p.hp2 ? 'hp2' : 'hp', 'k2', 'bone far') + L(p.s2 ? 's2' : 's', 'e2', 'bone far') + L('e2', 'w2', 'bone far');
  s += p.n ? L('n', 'hm') + L('s', 's2') + L('hp', 'hp2') + L('n', 's') + L('n', 's2') + L('hm', 'hp') + L('hm', 'hp2') : L('s', 'hp');
  s += L('hp', 'k') + L('k', 'a') + L('s', 'e') + L('e', 'w');
  s += `<circle cx="${hd[0].toFixed(1)}" cy="${hd[1].toFixed(1)}" r="8" class="headc"/>`;
  const at = d.load === 's' ? p.s : p.w, at2 = d.load === 's' ? null : p.w2;
  if (at && ['barbell', 'ez-bar', 'trap-bar', 'smith'].includes(equip)) s += `<circle cx="${at[0]}" cy="${at[1]}" r="9" class="plate"/><circle cx="${at[0]}" cy="${at[1]}" r="2.5" class="hub"/>`;
  else if (at && ['dumbbell', 'kettlebell'].includes(equip)) { [at, at2].filter(Boolean).forEach(q => { s += equip === 'kettlebell' ? `<circle cx="${q[0]}" cy="${q[1] + 6}" r="6" class="plate"/>` : `<rect x="${q[0] - 7}" y="${q[1] - 3}" width="14" height="6" rx="2" class="plate"/>`; }); }
  return s;
}
function movementDiagram(e, key) {
  const d = DIAGRAMS[key]; if (!d) return '';
  const frame = (p, label) => `<figure class="mv"><svg viewBox="20 -24 170 182" role="img" aria-label="${label} position"><line x1="20" y1="150.5" x2="190" y2="150.5" class="floor"/>${(d.props || []).map(k => PROPS[k]).join('')}${stick(p, e.equipment, d)}</svg><figcaption>${label}</figcaption></figure>`;
  if (d.hold) return `<div class="mvrow one">${frame(d.frames[0], 'Hold this position')}</div>`;
  return `<div class="mvrow">${frame(d.frames[0], '1 · Start')}<svg class="mvarrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h14M13 6l6 6-6 6"/></svg>${frame(d.frames[1], '2 · Finish')}</div>`;
}
const DIAGRAM_OVERRIDE = {};
[['bench_incline', 'incline-barbell-bench-press incline-dumbbell-press smith-machine-incline-press incline-machine-press'],
 ['bench_decline', 'decline-barbell-bench-press decline-dumbbell-press hammer-strength-decline-press'],
 ['fly_lying', 'dumbbell-fly'], ['fly_incline', 'incline-dumbbell-fly'],
 ['row_chest', 'seal-row chest-supported-t-bar-row chest-supported-dumbbell-row'],
 ['press_seated', 'seated-barbell-shoulder-press seated-dumbbell-shoulder-press arnold-press'],
 ['curl_incline', 'incline-dumbbell-curl'], ['curl_preacher', 'preacher-curl machine-preacher-curl spider-curl'],
 ['bench_dip', 'bench-dip'], ['situp_decline', 'decline-sit-up']].forEach(([k, ids]) => ids.split(' ').forEach(id => DIAGRAM_OVERRIDE[id] = k));
const BENCH_LABEL = { bench_press: 'Flat bench', lying_ext: 'Flat bench', fly_lying: 'Flat bench', bench_incline: 'Incline bench, about 30-45°', bench_decline: 'Decline bench, about 15-30°, feet hooked', fly_incline: 'Incline bench, about 30°', row_chest: 'Bench with your chest on the pad', press_seated: 'Upright bench, back supported (about 80-90°)', curl_incline: 'Incline bench, about 45-60°', curl_preacher: 'Preacher bench, upper arms on the pad', bench_dip: 'Flat bench behind you', situp_decline: 'Decline bench, feet hooked under the pads' };
function benchLabel(e, key) {
  if (e.equipment === 'machine' || e.equipment === 'cable') return '';
  if (e.id === 'seal-row') return 'Flat bench raised high, chest on the pad';
  if (e.id === 'spider-curl') return 'Incline bench, chest on the pad, arms hanging';
  return BENCH_LABEL[key] || '';
}
function howToCard(e) {
  const h = HOWTO[e.id]; if (!h) return '';
  return `<div class="card stack" style="gap:12px"><div class="label">How to do it</div>
    ${(() => { const key = DIAGRAM_OVERRIDE[e.id] || h.diagram, bl = benchLabel(e, key); return (bl ? `<div class="benchtag"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 15h18M6 15v5M18 15v5M5 11h9"/></svg>${esc(bl)}</div>` : '') + movementDiagram(e, key); })()}
    ${h.setup ? `<div><strong>Setup.</strong> ${esc(h.setup)}</div>` : ''}
    <ol class="steps">${h.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>
    ${h.cues?.length ? `<div><div class="label" style="margin-bottom:4px">Coaching cues</div><ul class="cues">${h.cues.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div>` : ''}
    ${h.mistakes?.length ? `<div><div class="label" style="margin-bottom:4px">Avoid</div><ul class="cues bad">${h.mistakes.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div>` : ''}
    ${h.breathing ? `<div class="small muted"><strong style="color:var(--fg)">Breathing.</strong> ${esc(h.breathing)}</div>` : ''}</div>`;
}
