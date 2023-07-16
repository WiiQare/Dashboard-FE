import React from 'react';
import { render } from '@testing-library/react';

import { useRouter } from 'next/router';
import SideBar from '../../../src/components/molecules/side-bar';

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

        render(<SideBar {...mockProps} />);
    });
});
