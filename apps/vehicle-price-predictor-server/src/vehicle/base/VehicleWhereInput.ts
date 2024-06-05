/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumVehicleCondition } from "./EnumVehicleCondition";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PredictionListRelationFilter } from "../../prediction/base/PredictionListRelationFilter";

@InputType()
class VehicleWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumVehicleCondition,
  })
  @IsEnum(EnumVehicleCondition)
  @IsOptional()
  @Field(() => EnumVehicleCondition, {
    nullable: true,
  })
  condition?: "Option1";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  make?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  mileage?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  model?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => PredictionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PredictionListRelationFilter)
  @IsOptional()
  @Field(() => PredictionListRelationFilter, {
    nullable: true,
  })
  predictions?: PredictionListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  year?: IntNullableFilter;
}

export { VehicleWhereInput as VehicleWhereInput };
