import { PredictionCreateNestedManyWithoutVehiclesInput } from "./PredictionCreateNestedManyWithoutVehiclesInput";

export type VehicleCreateInput = {
  condition?: "Option1" | null;
  make?: string | null;
  mileage?: number | null;
  model?: string | null;
  predictions?: PredictionCreateNestedManyWithoutVehiclesInput;
  year?: number | null;
};
