import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const executablePath = "C:\\Users\\TahaNaqvi\\AppData\\Local\\ms-playwright\\chromium-1234\\chrome-win64\\chrome.exe";
const browser = await chromium.launch({ executablePath, headless: true });
const outputDir = path.join(process.cwd(), "design-review");

await mkdir(outputDir, { recursive: true });

const targets = [
  { name: "home-desktop", width: 1440, height: 1000 },
  { name: "home-mobile", width: 390, height: 844, isMobile: true },
];

for (const target of targets) {
  const page = await browser.newPage({
    viewport: { width: target.width, height: target.height },
    deviceScaleFactor: 1,
    isMobile: target.isMobile ?? false,
  });

  const browserErrors = [];
  page.on("pageerror", (error) => browserErrors.push(error.message));

  await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });

  if (target.isMobile) {
    const menuButton = page.locator(".menu-toggle");
    await menuButton.click();
    const expanded = await menuButton.getAttribute("aria-expanded");
    if (expanded !== "true") throw new Error("Mobile navigation did not open correctly.");
    await page.keyboard.press("Escape");
  }

  await page.screenshot({ path: path.join(outputDir, `${target.name}.png`), fullPage: true });

  const report = await page.evaluate(() => ({
    title: document.title,
    sections: document.querySelectorAll("main > section, .hero-shell").length,
    documentWidth: document.documentElement.scrollWidth,
    viewportWidth: document.documentElement.clientWidth,
    horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    heading: document.querySelector("h1")?.textContent?.trim(),
    requiredAnchorsPresent: ["about", "framework", "resources", "programs", "testimonials", "contact"]
      .every((id) => document.getElementById(id)),
  }));

  console.log(target.name, { ...report, browserErrors });
  await page.close();
}

await browser.close();
