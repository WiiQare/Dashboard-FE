// Payers.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Payers from '../../../src/pages/Payments/Payers';

describe('Payers Component', () => {
  it('renders the component without errors', async () => {
    render(<Payers />);
  });
});
