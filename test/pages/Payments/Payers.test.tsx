import { render } from "@testing-library/react";
import Payers from "../../../src/pages/Payments/Payers";

jest.mock("next/router", () => ({
  replace: jest.fn(),
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
    replace: jest.fn(),
  }),
}));

test("renders Providers component", async () => {
  const { container } = render(<Payers />);
  expect(container).toMatchSnapshot();
});
