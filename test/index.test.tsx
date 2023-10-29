// Home.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Home from '@/pages';
import { UserType } from '@/Interfaces/interfaces';
import { SessionProvider } from 'next-auth/react';

test('renders Home component', () => {
  const { container } = render(
    <SessionProvider
      session={{
        user: { data: { userId: 'random123' } } as UserType,
        expires: '',
      }}
    >
      <Home />)
    </SessionProvider>,
  );
  expect(container).toMatchSnapshot();
});
