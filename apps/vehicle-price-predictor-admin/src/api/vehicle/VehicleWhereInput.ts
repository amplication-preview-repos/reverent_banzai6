import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PredictionListRelationFilter } from "../prediction/PredictionListRelationFilter";

export type VehicleWhereInput = {
  condition?: "Option1";
  id?: StringFilter;
  make?: StringNullableFilter;
  mileage?: IntNullableFilter;
  model?: StringNullableFilter;
  predictions?: PredictionListRelationFilter;
  year?: IntNullableFilter;
};
