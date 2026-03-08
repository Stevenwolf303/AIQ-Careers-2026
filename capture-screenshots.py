#!/usr/bin/env python3
"""Capture curated screenshots from standalone demo sites."""

from playwright.sync_api import sync_playwright
import os

BASE_URL = "http://127.0.0.1:8766"
OUT = "/Users/stevenwolf/Claude/assets/case-studies"
VIEWPORT_W = 1440
VIEWPORT_H = 900

SITES = {
    "brightpath": {
        "url": f"{BASE_URL}/brightpath-site/",
        "shots": [
            # Hero: full homepage top — warm brand with hero, nav, features
            {"name": "hero.jpg", "scroll": 0, "clip": {"x": 0, "y": 0, "width": VIEWPORT_W, "height": 900}},
            # Section 1: Programs section — colorful cards
            {"name": "section1.jpg", "scroll": 820, "clip": {"x": 0, "y": 0, "width": VIEWPORT_W, "height": 900}},
            # Section 2: Gallery / social proof area
            {"name": "section2.jpg", "scroll": 1700, "clip": {"x": 0, "y": 0, "width": VIEWPORT_W, "height": 900}},
        ]
    },
    "volta": {
        "url": f"{BASE_URL}/volta-site/",
        "shots": [
            # Hero: dark luxe hero with gold accents
            {"name": "hero.jpg", "scroll": 0, "clip": {"x": 0, "y": 0, "width": VIEWPORT_W, "height": 900}},
            # Section 1: Product cards / featured
            {"name": "section1.jpg", "scroll": 850, "clip": {"x": 0, "y": 0, "width": VIEWPORT_W, "height": 900}},
            # Section 2: Subscription / deeper content
            {"name": "section2.jpg", "scroll": 1800, "clip": {"x": 0, "y": 0, "width": VIEWPORT_W, "height": 900}},
        ]
    },
    "kinetic": {
        "url": f"{BASE_URL}/kinetic-site/",
        "shots": [
            # Hero: bold dark hero with orange accents
            {"name": "hero.jpg", "scroll": 0, "clip": {"x": 0, "y": 0, "width": VIEWPORT_W, "height": 900}},
            # Section 1: Class schedule or trainer cards
            {"name": "section1.jpg", "scroll": 850, "clip": {"x": 0, "y": 0, "width": VIEWPORT_W, "height": 900}},
            # Section 2: Pricing or deeper content
            {"name": "section2.jpg", "scroll": 1800, "clip": {"x": 0, "y": 0, "width": VIEWPORT_W, "height": 900}},
        ]
    },
    "riverwalk": {
        "url": f"{BASE_URL}/riverwalk-site/",
        "shots": [
            # Hero: warm cream/navy elegant layout
            {"name": "hero.jpg", "scroll": 0, "clip": {"x": 0, "y": 0, "width": VIEWPORT_W, "height": 900}},
            # Section 1: Property listings
            {"name": "section1.jpg", "scroll": 850, "clip": {"x": 0, "y": 0, "width": VIEWPORT_W, "height": 900}},
            # Section 2: Neighborhood or agents
            {"name": "section2.jpg", "scroll": 1800, "clip": {"x": 0, "y": 0, "width": VIEWPORT_W, "height": 900}},
        ]
    },
}

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch()

        for name, cfg in SITES.items():
            print(f"\n📸 Capturing {name}...")
            out_dir = os.path.join(OUT, name)
            os.makedirs(out_dir, exist_ok=True)

            page = browser.new_page(viewport={"width": VIEWPORT_W, "height": VIEWPORT_H})
            page.goto(cfg["url"], wait_until="networkidle")
            # Wait for fonts and animations to settle
            page.wait_for_timeout(1500)

            for shot in cfg["shots"]:
                page.evaluate(f"window.scrollTo(0, {shot['scroll']})")
                page.wait_for_timeout(600)  # Let scroll animations trigger

                path = os.path.join(out_dir, shot["name"])
                page.screenshot(
                    path=path,
                    clip=shot["clip"],
                    type="jpeg",
                    quality=92
                )
                size_kb = os.path.getsize(path) / 1024
                print(f"  ✅ {shot['name']} — {size_kb:.0f} KB")

            page.close()

        browser.close()
    print("\n🎉 All screenshots captured!")

if __name__ == "__main__":
    main()
