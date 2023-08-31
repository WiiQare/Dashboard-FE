import { render } from '@testing-library/react';
import Login from '../../../src/pages/auth/Login/index';

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Login Component', () => {
  it('should render without errors', () => {
    render(<Login />);
    // No errors thrown if the component renders successfully
  });
});
