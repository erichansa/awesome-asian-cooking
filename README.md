# asia-zutaten-lexikon

> Leichtgewichtige JavaScript / TypeScript Bibliothek & CLI für asiatische Zutaten, Gewürze, Saucen und Ersatztipps für authentisches Kochen. Bereitgestellt von [Asiakochen.de](https://www.asiakochen.de).

[![npm version](https://img.shields.io/npm/v/asia-zutaten-lexikon.svg)](https://www.npmjs.com/package/asia-zutaten-lexikon)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Asiakochen](https://img.shields.io/badge/Rezepte-Asiakochen.de-green.svg)](https://www.asiakochen.de)

---

## ⚡ Sofort im Terminal ausprobieren

Keine Installation nötig via `npx`:

```bash
npx asia-zutaten-lexikon
```

---

## 📦 Installation

```bash
npm install asia-zutaten-lexikon
```

---

## 🚀 Verwendung in JavaScript / TypeScript

```javascript
import { getIngredient, getRandomIngredient } from 'asia-zutaten-lexikon';

// Einzelne Zutat abfragen
const shaoxing = getIngredient('shaoxing-reiswein');
console.log(shaoxing.name, shaoxing.substitute);

// Zufällige Inspiration fürs Kochen
const tipp = getRandomIngredient();
console.log(`Heute im Wok: ${tipp.name}`);
```

---

## 🍜 Über Asiakochen.de

Asiakochen.de ist dein deutschsprachiger Guide für authentische asiatische Rezepte, Wok-Techniken, Saucen-Guides und Schritt-für-Schritt-Anleitungen für die chinesische, japanische, koreanische und thailändische Küche.

Entdecke vollständige Rezepte und detaillierte Zutatenprofile auf:
👉 **[https://www.asiakochen.de](https://www.asiakochen.de)**

---

## 📄 Lizenz

MIT © [Asiakochen.de](https://www.asiakochen.de)

