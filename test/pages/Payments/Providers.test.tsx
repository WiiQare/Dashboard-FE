import { render } from "@testing-library/react";
import Providers from "../../../src/pages/Payments/Providers";

test("renders Providers component", async () => {
  const { container } = render(<Providers />);
  expect(container).toMatchSnapshot();
});
