import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  condition?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  make?: SortOrder;
  mileage?: SortOrder;
  model?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};
