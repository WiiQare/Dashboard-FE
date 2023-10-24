import React from 'react';
import { render } from '@testing-library/react';
import Beneficiaries from '@/pages/Beneficiaries/index';
import { SessionProvider } from 'next-auth/react';
import { UserType } from '@/Interfaces/interfaces';

test('renders Vouchers component', async () => {
  const { container } = render(
    <SessionProvider session={{ user: { data: { userId: 'random123' } } as UserType, expires: '' }}>
      <Beneficiaries/>)
    </SessionProvider>,
  );
  expect(container).toMatchSnapshot();
});
