import { SortOrder } from "../../util/SortOrder";

export type PredictionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  predictedPrice?: SortOrder;
  predictionDate?: SortOrder;
  updatedAt?: SortOrder;
  vehicleId?: SortOrder;
};
