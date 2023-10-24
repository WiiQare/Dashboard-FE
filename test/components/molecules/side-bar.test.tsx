import React from 'react';
import { render } from '@testing-library/react';

import { useRouter } from 'next/router';
import SideBar from '@/components/molecules/side-bar';
import { SessionProvider } from 'next-auth/react';
import { UserType } from '@/Interfaces/interfaces';

// Mock the useRouter hook
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('SideBar Component', () => {
  const mockProps = {
    sidebarOpen: true,
    handleSidebar: jest.fn(),
  };

  it('should render without errors', () => {
    // Mock the useRouter result
    (useRouter as jest.Mock).mockReturnValue({});

    render(
      <SessionProvider session={{ user: { data: { userId: 'random123' } } as UserType, expires: '' }}>
       <SideBar {...mockProps} />
  </SessionProvider>,
   );
  });
});
