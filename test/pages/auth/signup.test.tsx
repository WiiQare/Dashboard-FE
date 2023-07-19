import { render, fireEvent, waitFor } from '@testing-library/react';
import SignUp from '../../../src/pages/auth/signUp/index';

jest.mock('next/router', () => ({
    __esModule: true,
    useRouter: jest.fn(),
}));

describe('SignUp Component', () => {
    it('should render without errors', () => {
        render(<SignUp />);
        // No errors thrown if the component renders successfully
    });

    // it('should navigate to the signin page when "Already have an account?" button is clicked', () => {
    //     const mockPush = jest.fn();
    //     jest.spyOn(require('next/router'), 'useRouter').mockReturnValue({
    //         push: mockPush,
    //     });

    //     const { getByText } = render(<SignUp />);
    //     const signInButton = getByText('Sign in');

    //     fireEvent.click(signInButton);

    //     expect(mockPush).toHaveBeenCalledWith('/auth/signin');
    // });

    // it('should submit the form and navigate to the home page on successful signup', async () => {
    //     const mockPush = jest.fn();
    //     jest.mock('next/router', () => ({
    //         useRouter: () => ({
    //             push: mockPush,
    //         }),
    //     }));

    //     const { getByLabelText, getByText } = render(<SignUp />);
    //     const emailInput = getByLabelText('Email');
    //     const passwordInput = getByLabelText('Password');
    //     const confirmPasswordInput = getByLabelText('Re-type your password');
    //     const signUpButton = getByText('Sign up');

    //     fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    //     fireEvent.change(passwordInput, { target: { value: 'password123' } });
    //     fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
    //     fireEvent.click(signUpButton);

    //     // Mock the SignUpApi function and assert its usage


    //     // Wait for the async operations to complete
    //     await waitFor(() => { });

    //     // Assert that the useRouter.push function was called with the correct route
    //     expect(mockPush).toHaveBeenCalledWith('/');
    // });

    // Add more test cases as needed
});
