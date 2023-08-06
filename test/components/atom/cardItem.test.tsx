import React from 'react';
import { render } from '@testing-library/react';
import CardsItem from '../../../src/components/atom/cardItem';

describe('CardsItem Component', () => {
    const mockProps = {
        color: 'red',
        title: 'Title',
        info: 'Info',
        shade: 'shade',
        values: 'values',
    };

    it('should render without errors', () => {
        render(<CardsItem progress={0} {...mockProps} />);
    });
});
