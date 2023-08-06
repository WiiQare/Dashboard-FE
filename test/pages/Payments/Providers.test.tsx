import { render } from "@testing-library/react";
import Provider from "../../../src/pages/Payments/Providers";



describe('Provider Component', () => {
  it('renders the component without errors', async () => {
    render(<Provider />);
  });

});