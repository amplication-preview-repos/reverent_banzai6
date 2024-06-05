import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type PredictionWhereInput = {
  id?: StringFilter;
  predictedPrice?: FloatNullableFilter;
  predictionDate?: DateTimeNullableFilter;
  vehicle?: VehicleWhereUniqueInput;
};
