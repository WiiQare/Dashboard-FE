import React from 'react';
import { render } from '@testing-library/react';
import Beneficiaries from '../../../src/pages/Beneficiaries/index';

describe('Beneficiaries Component', () => {
  it('renders the component without errors', async () => {
    render(<Beneficiaries />);
  });

});
