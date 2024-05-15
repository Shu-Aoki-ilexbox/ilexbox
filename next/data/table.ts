import { Column, Data } from "@/types/table";

export const TABLE_ROWS: Data[] = [
  {
    path: "aaa",
    name:  "Frozen yoghurt",
    calories: 159,
    fat: 6.0, 
    carbs:24,
    protein: 4.0
  },
  {
    path: "bbb",
    name:  "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3
  },
  {
    path: "ccc",
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: 6.0
  },
  {
    path: "ddd",
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3
  },
  {
    path: "eee",
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9
  },
];

export const TABLE_COLUMS: Column[] = [
  {
    id: "name",
    label: "Dessert (100g serving)",
    align: "left"
  },
  {
    id: "calories",
    label: "Calories",
    align: "right"
  },
  {
    id: "fat",
    label: "Fat (g)",
    align: "right"
  },
  {
    id: "carbs",
    label: "Carbs (g)",
    align: "right"
  },
  {
    id: "protein",
    label: "Protein (g)",
    align: "right"
  },
];