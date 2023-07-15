import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination from "./pagination";

describe("Pagination Component", () => {
    test("Calls onPageChange with the correct page number when a page button is clicked", () => {
        const onPageChange = jest.fn();
        const totalPages = 10;
        const currentPage = 5;

        const { getByText } = render(
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        );

        const pageButton = getByText("6");
        fireEvent.click(pageButton);

        expect(onPageChange).toHaveBeenCalledWith(6);
    });
});
