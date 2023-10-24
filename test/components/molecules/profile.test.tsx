import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Profile from '@/components/molecules/profile';
import rootReducer from '@/redux/rootReducer';
import { SessionProvider } from 'next-auth/react';
import { UserType } from '@/Interfaces/interfaces';

describe('Profile Component', () => {
  it('Renders without errors', () => {
    const store = createStore(rootReducer); // Create a Redux store with your reducer
    render(
        <SessionProvider session={{ user: { data: { userId: 'random123' } } as UserType, expires: '' }}>
     <Provider store={store}>
        <Profile />
      </Provider>
  </SessionProvider>
     ,
    );
  });
});
