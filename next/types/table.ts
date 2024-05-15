export type Data = {
  path: string,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
};

export type Column = {
  id: string,
  label: string,
  align: "left" | "right" | "center" | "inherit" | "justify" | undefined
}