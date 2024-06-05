import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type PredictionUpdateInput = {
  predictedPrice?: number | null;
  predictionDate?: Date | null;
  vehicle?: VehicleWhereUniqueInput | null;
};
