import { render } from "@testing-library/react";
import Payers from "../../../src/pages/Payers";


describe('Payers Component', () => {
  it('renders the component without errors', async () => {
    render(<Payers />);
  });

});
