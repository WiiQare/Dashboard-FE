import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import SignIn from './index';

jest.mock('next/router', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

describe('SignIn Component', () => {
    it('should render without errors', () => {
        render(<SignIn />);
        // No errors thrown if the component renders successfully
    });
});
