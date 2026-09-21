import pkg from "/Users/anthony/.npm/_npx/fd3bca3c548369c0/node_modules/playwright/index.js";
const { chromium } = pkg;
import { mkdir } from "node:fs/promises";
import path from "node:path";

const OUT = path.resolve("qa-screenshots");
const BASE = "http://localhost:3000";
const pages = [
  ["00-home.png", "/"],
  ["01-about.png", "/about"],
  ["02-services.png", "/services"],
  ["03-process.png", "/process"],
  ["04-contact.png", "/contact"],
  ["05-tony-ngo.png", "/inspectors/tony-ngo"],
  ["06-rikki-neel.png", "/inspectors/rikki-neel"],
  ["07-jason-dixon.png", "/inspectors/jason-dixon"],
  ["08-vi-tran.png", "/inspectors/vi-tran"],
];

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const page = await context.newPage();

for (const [file, route] of pages) {
  await page.goto(`${BASE}${route}`, { waitUntil: "networkidle", timeout: 60000 });
  await page.addStyleTag({
    content: "nextjs-portal, [data-nextjs-toast], #__next-build-watcher { display: none !important; }",
  });
  await page.waitForTimeout(500);
  const dest = path.join(OUT, file);
  await page.screenshot({ path: dest, fullPage: true });
  const box = await page.evaluate(() => ({
    w: document.documentElement.scrollWidth,
    h: document.documentElement.scrollHeight,
  }));
  console.log(`captured ${file} ${box.w}x${box.h}`);
}

await browser.close();
