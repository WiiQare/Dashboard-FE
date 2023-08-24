import React from 'react';
import { render } from '@testing-library/react';
import CardSkeleton from '../../../../src/components/atom/skeleton/cardSkeleton';

describe('CardSkeleton Component', () => {
  it('renders the correct number of skeleton cards', () => {
    const numberOfCards = 3;
    const { container } = render(<CardSkeleton number={numberOfCards} />);

    const skeletonCards = container.querySelectorAll('.grid-cols-1');

    expect(skeletonCards).toMatchSnapshot();
  });
});
