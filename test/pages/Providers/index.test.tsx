import React from 'react';
import { render } from '@testing-library/react';
import Providers from '@/pages/Providers/index';
import { SessionProvider } from 'next-auth/react';
import { UserType } from '@/Interfaces/interfaces';

test('renders Vouchers component', async () => {
  const { container } = render(
    <SessionProvider
      session={{
        user: { data: { userId: 'random123' } } as UserType,
        expires: '',
      }}
    >
      <Providers />)
    </SessionProvider>,
  );
  expect(container).toMatchSnapshot();
});
