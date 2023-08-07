import React from "react";
import { render } from "@testing-library/react";
import TableSkeleton from "../../../../src/components/atom/skeleton/tableSkeleton"; 

describe("TableSkeleton Component", () => {
    it("renders the correct number of skeleton cards", () => {
        const numberOfCards = 3; 
        const { container } = render(<TableSkeleton row={numberOfCards} />);

        const skeletonCards = container.querySelectorAll(".grid-cols-1");

        expect(skeletonCards).toMatchSnapshot();
    });
});
