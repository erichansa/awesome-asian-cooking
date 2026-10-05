export interface Ingredient {
  id: string;
  name: string;
  chinese: string;
  category: string;
  flavor: string;
  description: string;
  substitute: string;
  url: string;
}

export declare const INGREDIENTS: Ingredient[];
export declare function getIngredient(id: string): Ingredient | undefined;
export declare function getAllIngredients(): Ingredient[];
export declare function getRandomIngredient(): Ingredient;

declare const _default: {
  INGREDIENTS: Ingredient[];
  getIngredient: (id: string) => Ingredient | undefined;
  getAllIngredients: () => Ingredient[];
  getRandomIngredient: () => Ingredient;
};
export default _default;
