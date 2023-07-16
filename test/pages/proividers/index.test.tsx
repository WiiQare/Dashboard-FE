import { render, screen, waitFor } from '@testing-library/react';

import 'next/router';
import Providers from '../../../src/pages/Providers/index';
jest.mock('next/router', () => ({
    replace: jest.fn(),
    useRouter: jest.fn().mockReturnValue({
        // Provide mock implementations of any router methods
        push: jest.fn(),
        replace: jest.fn(),
    }),
}));
test('renders Providers component', async () => {
    // render();
    // const { container } = render(<Providers />);
    // const rawHTML = container.innerHTML;
    // console.log(rawHTML);
    // await waitFor(() => screen.getByText("Items"));
    // Assert that the component renders without throwing any errors
    // expect(screen.getByText(/Items per Page/)).toBeInTheDocument();
});

