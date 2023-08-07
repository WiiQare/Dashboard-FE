import React from 'react';
import { render } from '@testing-library/react';
import Beneficiaries from '../../../src/pages/Beneficiaries/index';

test("renders Providers component", async () => {
  const { container } = render(<Beneficiaries />);
  expect(container).toMatchSnapshot();
});
