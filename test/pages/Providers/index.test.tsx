import React from 'react';
import { render} from '@testing-library/react';
import Providers from '../../../src/pages/Providers/index';

test("renders Providers component", async () => {
  const { container } = render(<Providers />);
  expect(container).toMatchSnapshot();
});

