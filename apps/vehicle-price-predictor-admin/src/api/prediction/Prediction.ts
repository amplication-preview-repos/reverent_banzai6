import { Vehicle } from "../vehicle/Vehicle";

export type Prediction = {
  createdAt: Date;
  id: string;
  predictedPrice: number | null;
  predictionDate: Date | null;
  updatedAt: Date;
  vehicle?: Vehicle | null;
};
