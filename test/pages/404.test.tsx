import { render } from "@testing-library/react";
import Error404 from "../../src/pages/404";

test("renders Error404 component", async () => {
    const { container } = render(<Error404 />);
    expect(container).toMatchSnapshot();
});
