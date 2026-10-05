/**
 * asia-zutaten-lexikon
 * Offizielle Datenbank und API für asiatische Zutaten und Gewürze
 * https://www.asiakochen.de
 */

export const INGREDIENTS = [
  {
    id: "shaoxing-reiswein",
    name: "Shaoxing Reiswein (Shao Hsing)",
    chinese: "绍兴花雕酒",
    category: "Saucen & Flüssigkeiten",
    flavor: "Nussig, aromatisch, leicht herb",
    description: "Der Eckpfeiler der authentischen chinesischen Küche. Unverzichtbar für Wokgerichte, Marinaden und Fleischentgiftung.",
    substitute: "Trockener Sherry oder milder Weißwein mit einem Spritzer Reisessig.",
    url: "https://www.asiakochen.de"
  },
  {
    id: "dunkle-sojasauce",
    name: "Dunkle Sojasauce (Dark Soy Sauce)",
    chinese: "老抽",
    category: "Saucen",
    flavor: "Marmeladig-süßlich, malzig, mild-salzig",
    description: "Hauptsächlich für die goldbraune, glänzende Farbe bei Schmorgerichten und gebratenen Nudeln.",
    substitute: "Helle Sojasauce gemischt mit Melasse oder etwas braunem Rohrzucker.",
    url: "https://www.asiakochen.de"
  },
  {
    id: "gochujang",
    name: "Gochujang (Koreanische Chilipaste)",
    chinese: "苦椒酱 (Gochujang)",
    category: "Pasten",
    flavor: "Fermentiert, scharf, erdig, leicht süß",
    description: "Traditionell fermentierte koreanische Chilipaste aus Chilipulver, Klebreis und Sojabohnen.",
    substitute: "Miso-Paste gemischt mit Chilipulver (Gochugaru) und einer Prise Zucker.",
    url: "https://www.asiakochen.de"
  },
  {
    id: "szechuanpfeffer",
    name: "Szechuanpfeffer (Hua Jiao)",
    chinese: "花椒",
    category: "Gewürze",
    flavor: "Zitrusartig, betäubend (Ma-La Effekt)",
    description: "Kein echter Pfeffer, sondern die Samenkapsel einer Rautengewächsart. Erzeugt das typische Kribbeln auf der Zunge.",
    substitute: "Schwarzer Pfeffer gemischt mit etwas Koriander und geriebener Zitronenschale.",
    url: "https://www.asiakochen.de"
  },
  {
    id: "chinkiang-essig",
    name: "Chinkiang Essig (Schwarzer Reisessig)",
    chinese: "镇江香醋",
    category: "Essig",
    flavor: "Rauchig, säuerlich, komplex, malzig",
    description: "Klassischer schwarzer Essig für Dumpling-Dips, Kung Pao Hähnchen und Schmorgerichte.",
    substitute: "Balsamico-Essig gemischt mit Reisessig im Verhältnis 1:1.",
    url: "https://www.asiakochen.de"
  }
];

export function getIngredient(id) {
  return INGREDIENTS.find(item => item.id.toLowerCase() === id.toLowerCase());
}

export function getAllIngredients() {
  return INGREDIENTS;
}

export function getRandomIngredient() {
  const index = Math.floor(Math.random() * INGREDIENTS.length);
  return INGREDIENTS[index];
}

export default {
  INGREDIENTS,
  getIngredient,
  getAllIngredients,
  getRandomIngredient
};

