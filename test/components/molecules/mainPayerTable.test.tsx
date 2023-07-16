import React from 'react';
import { render } from '@testing-library/react';
import MainPayersTable from '../../../src/components/molecules/mainPayerTable';

describe('MainPayersTable Component', () => {
    const result = [
        {
            "id": "be99e338-7d20-4fc8-850f-10f0bca2e1bd",
            "name": "Abhishek Shandilya",
            "country": "United States",
            "registrationDate": "11/05/2023",
            "lastActivityOn": "",
            "uniqueBeneficiaryCount": 0,
            "currency": "EUR",
            "purchasedVouchers": {
                "numberOfVouchers": 0,
                "value": 0
            },
            "pendingVouchers": {
                "numberOfVouchers": 0,
                "value": 0
            },
            "unclaimedVouchers": {
                "numberOfVouchers": 0,
                "value": 0
            },
            "redeemedVouchers": {
                "numberOfVouchers": 0,
                "value": 0
            },
            "vouchersNotSent": {
                "numberOfVouchers": 0,
                "value": 0
            }
        }
    ]
    it('Renders without errors', () => {
        render(<MainPayersTable result={result} />);
    });
});