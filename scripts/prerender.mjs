// Renders the app to static HTML after `vite build` so the page is readable
// before (and without) JavaScript, then hydrates on the client.
import { readFileSync, writeFileSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

const { render } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);
const appHtml = render();

let html = readFileSync(join(dist, 'index.html'), 'utf8');
if (!html.includes('<!--app-html-->')) throw new Error('app placeholder missing from dist/index.html');
html = html.replace('<!--app-html-->', appHtml);

// Preload the primary text face so headings render without a late swap.
const font = readdirSync(join(dist, 'assets')).find((f) => /^instrument-sans-latin-wdth-normal-.*\.woff2$/.test(f));
if (font) {
  html = html.replace('</title>', `</title>\n    <link rel="preload" as="font" type="font/woff2" href="/assets/${font}" crossorigin />`);
}

writeFileSync(join(dist, 'index.html'), html);
rmSync(ssrDir, { recursive: true, force: true });
console.log(`prerendered ${(appHtml.length / 1024).toFixed(1)} KB of HTML${font ? ` (+ preload ${font})` : ''}`);
