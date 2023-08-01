import { render } from "@testing-library/react";
import Provider from "../../../src/pages/Payments/Provider";

jest.mock("next/router", () => ({
  replace: jest.fn(),
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
    replace: jest.fn(),
  }),
}));

test("renders Providers component", async () => {
  const { container } = render(<Provider />);
  expect(container).toMatchSnapshot();
});
