import SignIn from "../../../src/pages/auth/signIn/index";
import { render } from '@testing-library/react';


describe('SignIn', () => {
    it('should render the SignIn component', () => {
        render(<SignIn />);
        // Assert that the component renders without throwing any error
    });
});
