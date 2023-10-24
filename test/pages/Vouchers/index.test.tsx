import { render } from '@testing-library/react';
import Vouchers from '@/pages/Vouchers/index';
import { SessionProvider } from 'next-auth/react';
import { UserType } from '@/Interfaces/interfaces';

test('renders Vouchers component', async () => {
  const { container } = render(<SessionProvider session={{ user: { data: { userId: 'random123' } } as UserType, expires: '' }}>
    <Vouchers />)
  </SessionProvider>,);
  expect(container).toMatchSnapshot();
});


