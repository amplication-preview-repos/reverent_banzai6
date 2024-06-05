import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type PredictionCreateInput = {
  predictedPrice?: number | null;
  predictionDate?: Date | null;
  vehicle?: VehicleWhereUniqueInput | null;
};
