import { PredictionUpdateManyWithoutVehiclesInput } from "./PredictionUpdateManyWithoutVehiclesInput";

export type VehicleUpdateInput = {
  condition?: "Option1" | null;
  make?: string | null;
  mileage?: number | null;
  model?: string | null;
  predictions?: PredictionUpdateManyWithoutVehiclesInput;
  year?: number | null;
};
