import { render } from "@testing-library/react";
import Vouchers from "../../../src/pages/Vouchers/index";

test("renders Vouchers component", async () => {
  const { container } = render(<Vouchers />);
  expect(container).toMatchSnapshot();
});
