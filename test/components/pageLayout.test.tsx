import React from 'react';
import { render } from '@testing-library/react';
import PageLayout from '@/components/pages';
import { SessionProvider } from 'next-auth/react';
import { UserType } from '../../src/Interfaces/interfaces';


describe('PageLayout', () => {
    it('renders the component without errors', () => {
        render(
            <SessionProvider session={{ user: { data: { userId: 'random123' } } as UserType, expires: '' }}>
                <PageLayout
                    columns={[]}
                    CardsData={() => []}
                    columnGroupingModel={{}}
                    endpoint=""
                    summaryEndpoint=""
                    itemNumberEndpoint=""
                />
            </SessionProvider>,
        );
    });
});
