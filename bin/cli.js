#!/usr/bin/env node

import { getRandomIngredient } from '../index.js';

const item = getRandomIngredient();
console.log('\n\x1b[1m\x1b[32m=== ASIA-ZUTATEN-LEXIKON ===\x1b[0m');
console.log(`\x1b[33mZutat:\x1b[0m \x1b[1m${item.name}\x1b[0m (${item.chinese})`);
console.log(`\x1b[36mKategorie:\x1b[0m ${item.category} | \x1b[35mGeschmack:\x1b[0m ${item.flavor}\n`);
console.log(`\x1b[37m${item.description}\x1b[0m\n`);
console.log(`\x1b[33mErsatz-Tipp:\x1b[0m ${item.substitute}`);
console.log(`\n\x1b[34mMehr Rezepte & Zubereitungstipps auf:\x1b[0m`);
console.log(`\x1b[4mhttps://asiakochen.de\x1b[0m\n`);
