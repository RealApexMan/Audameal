export interface HomeShowdown {
  id: string;
  title: string;
  imageUrl: string;
  protein: number;
  carbs: number;
  fats: number;
  calories: number;
  tag?: string; // "Meal prep", "Petit-déj", "Dessert", etc. (optionnel)
}
export type HomeShowdownList = HomeShowdown[];
