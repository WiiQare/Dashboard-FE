import { render } from '@testing-library/react';
import Login from '@/pages/auth/Login/index';
import { SessionProvider } from 'next-auth/react';
import { UserType } from '@/Interfaces/interfaces';

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Login Component', () => {
  it('should render without errors', () => {
    render(
      <SessionProvider
        session={{
          user: { data: { userId: 'random123' } } as UserType,
          expires: '',
        }}
      >
        <Login />)
      </SessionProvider>,
    );
    // No errors thrown if the component renders successfully
  });
});
