import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Providers from '../../../src/pages/Providers/index';

describe('Providers Component', () => {
  it('renders the component without errors', async () => {
    render(<Providers/>);
  });

});
