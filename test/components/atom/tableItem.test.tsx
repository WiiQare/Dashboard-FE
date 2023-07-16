import React from "react";
import { render } from "@testing-library/react";
import TableItems from "../../../src/components/atom/tableItem";
import { GridColumnGroupingModel } from "@mui/x-data-grid";


describe("TableItems Component", () => {
    test("Renders without errors", () => {
        const data = [
            { id: 1, name: "John Doe", age: 25 },
            { id: 2, name: "Jane Smith", age: 30 },
            // Add more test data as needed
        ];

        const columns = [
            { field: "id", headerName: "ID" },
            { field: "name", headerName: "Name" },
            { field: "age", headerName: "Age" },
            // Add more test columns as needed
        ];

        const groups: GridColumnGroupingModel = []; // Set the column grouping model if required

        render(<TableItems data={data} columns={columns} groups={groups} />);
    });
});
