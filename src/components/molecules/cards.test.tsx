import React from 'react';
import { render } from '@testing-library/react';
import Cards from './cards';

describe('Cards Component', () => {
    it('Renders without errors', () => {
        const data = [
            {
                "title": "Vouchers In One Week",
                "color": "F37500",
                "values": 0
            },
            {
                "title": "Vuchers In One Month",
                "color": "F37500",
                "values": 0
            },
            {
                "title": "Vouchers In Three Months",
                "color": "F37500",
                "values": 8521
            },
            {
                "title": "Vouchers In Six Months",
                "color": "FEE501",
                "info": 64,
                "values": 8521
            },
            {
                "title": "Vouchers In Max Time",
                "color": "FEE501",
                "info": 64,
                "values": 8521
            },
            {
                "title": "Pending Vouchers",
                "color": "FEE501",
                "info": 0,
                "values": 0
            },
            {
                "title": "Redeemed Vouchers",
                "color": "FEE501",
                "info": 0,
                "values": 0
            },
            {
                "title": "Unclaimed Vouchers",
                "color": "FEE501",
                "info": 2,
                "values": 112
            },
            {
                "title": "Claimed Vouchers",
                "color": "FEE501",
                "info": 1,
                "values": 200
            }
        ];
        render(<Cards data={data} />);
    });
});
