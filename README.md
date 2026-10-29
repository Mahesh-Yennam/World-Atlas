# World Countries Atlas — Gamility Explorer

> **An interactive, client-side digital geopolitical atlas and geographical discovery application.**

A completely self-contained, responsive, zero-dependency educational platform featuring comprehensive country dossiers across all continents, national flags via FlagCDN with unicode flag fallbacks, live local timezone clocks, side-by-side multi-nation comparative metrics, and an interactive world capital & flag trivia quiz master.

---

## 🌟 Key Features

1. **Comprehensive Country Dossiers:**
   - Official diplomatic nomenclature, ISO alpha-2 & alpha-3 codes, and national capitals.
   - Core metrics: Population count, land area (km² & sq mi), and population density.
   - Financial & Cultural data: Official currency name, code, symbol, and primary languages spoken.
   - Technical metadata: International dialing codes, top-level domains (.tld), driving side, and bordering neighbors.

2. **Continental & Subregional Filtering:**
   - Real-time filtering across all major planetary regions:
     - 🌍 Africa
     - 🌎 Americas
     - 🌏 Asia
     - 🏰 Europe
     - 🏝️ Oceania
     - ❄️ Polar & Dependencies
   - Multi-field search querying by country name, capital, currency code, language, or ISO tag.

3. **Multi-Metric Sorting:**
   - Sort instantly by Population (highest/lowest), Land Area (largest/smallest), Population Density, or Alphabetical order.

4. **Interactive Country Comparison Matrix:**
   - Pin up to 3 nations side-by-side with visual comparison bars benchmarked against world records (e.g. India/China for population, Russia/Canada for area, Monaco/Singapore for density).

5. **Live Timezone Offsets & Real-Time Local Clocks:**
   - Displays real-time local time tickers calculated from each country's primary UTC offset, allowing users to see what time it is anywhere in the world right now.

6. **World Geography Quiz Master:**
   - Engaging multiple-choice challenge testing knowledge on world capitals, national flags, and continental geography with streak scoring.

7. **100% Client-Side & Standalone Architecture:**
   - Built with pure HTML5, modern CSS3, and vanilla JavaScript. Zero build steps, zero analytics tracking, runs completely offline or on static web hosts.

---

## 🚀 Running Locally

Open `index.html` directly in any modern desktop or mobile web browser. No server or compilation required:

```bash
# Optional local development server
python -m http.server 8080
# Open http://localhost:8080 in your browser
```

---

## 📁 Repository Structure

```
explorer/world-atlas/
├── .gitignore          # Version control ignores
├── README.md           # Documentation & technical specifications
├── app.js              # Atlas engine, datasets, comparator, and quiz logic
├── favicon.svg         # Crisp vector brand icon
├── index.html          # Semantic HTML5 application layout
├── robots.txt          # Search engine crawler policies
├── site.webmanifest    # Progressive Web App manifest
├── sitemap.xml         # XML sitemap
└── style.css           # Premium responsive dark-mode styles
```

---

## 📄 License & Attribution

Copyright © 2026 [Gamility](https://mahesh-yennam.github.io/Gamility/) (All Rights Reserved). Flag vectors served via public domain / FlagCDN with emoji fallbacks.
