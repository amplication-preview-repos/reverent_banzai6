import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VehicleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Vehicles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Condition" source="condition" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Make" source="make" />
        <TextField label="Mileage" source="mileage" />
        <TextField label="Model" source="model" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Year" source="year" />
      </Datagrid>
    </List>
  );
};
