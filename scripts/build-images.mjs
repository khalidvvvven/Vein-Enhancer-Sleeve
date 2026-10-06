// Generates optimized web derivatives from the client's original assets.
// Originals in source-assets/ are never modified. Run: npm run images
import sharp from 'sharp';
import { optimize } from 'svgo';
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, readFileSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const SRC = join(ROOT, 'source-assets');
const OUT = join(ROOT, 'public', 'img');
const BRAND_OUT = join(ROOT, 'public', 'brand');
const MANIFEST = join(ROOT, 'src', 'generated', 'images.ts');

const ORIGINAL_FLAT = join(SRC, 'client-original', 'Proto 2.4-front.jpg');
const CUT_ARM = join(SRC, 'cutouts', 'arm-worn-cutout.png');
const CUT_FLAT = join(SRC, 'cutouts', 'flat-lay-cutout.png');
const LOGO_PDF = join(SRC, 'client-original', 'logo-vector', 'WARM UP.pdf');

// Files are overwritten in place (keeps a running dev server's public-file cache valid).
mkdirSync(OUT, { recursive: true });
mkdirSync(BRAND_OUT, { recursive: true });
mkdirSync(join(ROOT, 'src', 'generated'), { recursive: true });

const manifest = {};

/** Write AVIF + WebP at each width (never upscaling past the source). */
async function derive(name, input, widths, { alpha = false, quality = {} } = {}) {
  const buf = await input.png().toBuffer();
  const meta = await sharp(buf).metadata();
  const usable = [...new Set(widths.map((w) => Math.min(w, meta.width)))].sort((a, b) => a - b);
  for (const w of usable) {
    const resized = sharp(buf).resize({ width: w, kernel: 'lanczos3' });
    await resized
      .clone()
      .avif({ quality: quality.avif ?? (alpha ? 62 : 58), effort: 6 })
      .toFile(join(OUT, `${name}-${w}.avif`));
    await resized
      .clone()
      .webp({ quality: quality.webp ?? 82, alphaQuality: 90, effort: 6, smartSubsample: true })
      .toFile(join(OUT, `${name}-${w}.webp`));
  }
  manifest[name] = { width: meta.width, height: meta.height, widths: usable };
  console.log(`${name}: ${meta.width}x${meta.height} -> ${usable.join(', ')}`);
}

/** Trim fully transparent margins, keeping a small breathing pad. */
async function trimmed(path, pad = 6) {
  const t = await sharp(path).trim({ threshold: 1 }).png().toBuffer();
  return sharp(t).extend({ top: pad, bottom: pad, left: pad, right: pad, background: { r: 0, g: 0, b: 0, alpha: 0 } });
}

// ---------- Product cutouts ----------
// Worn on the left arm: shows sleeve + integrated mitten over the hand.
const armBuf = await (await trimmed(CUT_ARM, 4)).png().toBuffer();
const armMeta = await sharp(armBuf).metadata();
await derive('arm-worn', sharp(armBuf), [220, 320, 440, 600], { alpha: true });

// Lower arm: forearm, mitten and hand (for the comfort section + "as worn" inset).
{
  const top = Math.round(armMeta.height * 0.6);
  const crop = sharp(armBuf).extract({ left: 0, top, width: armMeta.width, height: armMeta.height - top });
  await derive('mitten-worn', crop, [240, 360, 600], { alpha: true });
}

// Flat-lay cutout: every construction detail visible.
const flatBuf = await (await trimmed(CUT_FLAT, 12)).png().toBuffer();
await derive('flat-lay', sharp(flatBuf), [640, 960, 1280, 1760, 2400], { alpha: true });
// Vertical art direction for small screens: cuff at the top, mitten at the bottom (as worn).
await derive('flat-lay-vertical', sharp(flatBuf).rotate(90), [360, 540, 720, 960], { alpha: true });

// ---------- Macro detail crops from the high-resolution original ----------
const macros = {
  'detail-strap': { left: 280, top: 300, width: 640, height: 640 },
  'detail-pouch': { left: 830, top: 470, width: 820, height: 820 },
  'detail-fleece': { left: 1960, top: 560, width: 700, height: 700 },
  'detail-cuff': { left: 150, top: 640, width: 560, height: 560 },
};
// Crops come from the cutout (same pixel grid as the original) laid on neutral paper,
// so the cutting mat never shows at the edges. The fabric pixels are untouched.
const flatOnPaper = await sharp(CUT_FLAT).flatten({ background: '#EDE7DD' }).png().toBuffer();
for (const [name, rect] of Object.entries(macros)) {
  await derive(name, sharp(flatOnPaper).extract(rect), [360, 560, 820]);
}

// ---------- Logo ----------
// The client PDF (CorelDRAW export) is converted to SVG and minified; the artwork is unchanged.
const tmpSvg = join(ROOT, 'node_modules', '.cache-logo.svg');
execFileSync('pdftocairo', ['-svg', LOGO_PDF, tmpSvg]);
const rawSvg = readFileSync(tmpSvg, 'utf8');
const svgoConfig = {
  multipass: true,
  floatPrecision: 2,
  plugins: ['preset-default'],
};
const logo = optimize(rawSvg, svgoConfig).data;
writeFileSync(join(BRAND_OUT, 'warmup-logo.svg'), logo);
const vb = logo.match(/viewBox="([^"]+)"/)[1].split(/\s+/).map(Number);
const logoMeta = { width: Math.round(vb[2]), height: Math.round(vb[3]) };
console.log(`logo svg: ${logo.length} bytes, viewBox ${vb.join(' ')}`);

// Favicon: the logo's own "UP" badge, framed with a square viewBox (no redrawing).
const badgeW = vb[2] * 0.354;
const side = badgeW;
const badgeCx = vb[2] - badgeW / 2;
const favicon = logo
  .replace(/viewBox="[^"]+"/, `viewBox="${(badgeCx - side / 2).toFixed(1)} ${(vb[3] / 2 - side / 2).toFixed(1)} ${side.toFixed(1)} ${side.toFixed(1)}"`)
  .replace(/\swidth="[^"]+"/, ' width="512"')
  .replace(/\sheight="[^"]+"/, ' height="512"');
for (const [file, size] of [['apple-touch-icon.png', 180], ['favicon-32.png', 32], ['icon-192.png', 192]]) {
  await sharp(Buffer.from(favicon), { density: 300 })
    .resize(size, size)
    .flatten({ background: '#ffffff' })
    .png()
    .toFile(join(BRAND_OUT, file));
}
rmSync(tmpSvg, { force: true });

// ---------- Social share image (1200x630) ----------
{
  const W = 1200, H = 630;
  const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs>
      <radialGradient id="g" cx="0.72" cy="0.62" r="0.6"><stop offset="0" stop-color="#F3C9B5" stop-opacity="0.9"/><stop offset="1" stop-color="#F6F2EB" stop-opacity="0"/></radialGradient>
      <linearGradient id="b" x1="0" x2="1"><stop offset="0" stop-color="#0931B4"/><stop offset="0.45" stop-color="#59357F"/><stop offset="0.75" stop-color="#AC3A49"/><stop offset="1" stop-color="#E73D21"/></linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="#F6F2EB"/><rect width="100%" height="100%" fill="url(#g)"/>
    <rect y="${H - 8}" width="100%" height="8" fill="url(#b)"/>
  </svg>`);
  const logoPng = await sharp(Buffer.from(logo), { density: 400 }).resize({ width: 520 }).png().toBuffer();
  const flatPng = await sharp(flatBuf).resize({ width: 980 }).png().toBuffer();
  const flatMeta = await sharp(flatPng).metadata();
  await sharp(bg)
    .composite([
      { input: logoPng, left: 72, top: 64 },
      { input: flatPng, left: W - 980 - 40, top: H - flatMeta.height - 40 },
    ])
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(join(BRAND_OUT, 'og-image.jpg'));
  console.log('og-image.jpg written');
}

// ---------- Manifest for width/height attributes (prevents layout shift) ----------
writeFileSync(
  MANIFEST,
  `// Generated by scripts/build-images.mjs — do not edit by hand.\nexport const images = ${JSON.stringify(manifest, null, 2)} as const;\n\nexport type ImageName = keyof typeof images;\n\nexport const logo = ${JSON.stringify(logoMeta)} as const;\n`,
);
console.log('manifest written', existsSync(MANIFEST));
