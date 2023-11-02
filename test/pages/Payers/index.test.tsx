import { render } from '@testing-library/react';
import Payers from '../../../src/pages/Payers';

test('renders Payers component', async () => {
  const { container } = render(<Payers />);
  expect(container).toMatchSnapshot();
});
