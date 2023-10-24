// Payers.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Payers from '@/pages/Payments/Payers';
import { SessionProvider } from 'next-auth/react';
import { UserType } from '@/Interfaces/interfaces';

test('renders Vouchers component', async () => {
  const { container } = render(
    <SessionProvider session={{ user: { data: { userId: 'random123' } } as UserType, expires: '' }}>
      <Payers/>)
    </SessionProvider>,
  );
  expect(container).toMatchSnapshot();
});
