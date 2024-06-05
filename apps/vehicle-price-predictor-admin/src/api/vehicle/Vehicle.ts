import { Prediction } from "../prediction/Prediction";

export type Vehicle = {
  condition?: "Option1" | null;
  createdAt: Date;
  id: string;
  make: string | null;
  mileage: number | null;
  model: string | null;
  predictions?: Array<Prediction>;
  updatedAt: Date;
  year: number | null;
};
