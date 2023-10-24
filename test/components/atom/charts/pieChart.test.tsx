import React from 'react';
import { render } from '@testing-library/react';
import PayersPieChart, {
  PayersData,
} from '@/components/atom/charts/pieChart';

describe('PayersPieChart Component', () => {
  it('should render without errors when data is provided', () => {
    const data: PayersData = {
      numberOfActivePayers: 10,
      numberOfRegisteredPayers: 20,
    };
    render(<PayersPieChart data={data} />);
    // No errors thrown if the component renders successfully
  });

  it('should render without errors when data is undefined', () => {
    render(<PayersPieChart data={undefined} />);
    // No errors thrown if the component renders successfully
  });
});
