import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Profile from './profile';
import rootReducer from '@/redux/rootReducer';

describe('Profile Component', () => {
    it('Renders without errors', () => {
        const store = createStore(rootReducer); // Create a Redux store with your reducer
        render(
            <Provider store={store}>
                <Profile />
            </Provider>
        );
    });
});
