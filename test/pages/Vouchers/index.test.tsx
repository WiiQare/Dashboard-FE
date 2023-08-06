import { render } from "@testing-library/react";
import Voucher from "../../../src/pages/Vouchers/index";

describe('Voucher Component', () => {
  it('renders the component without errors', async () => {
    render(<Voucher />);
  });

});