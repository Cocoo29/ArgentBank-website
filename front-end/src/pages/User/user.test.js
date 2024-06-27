import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux'; 
import store from '../../store/store'; 
import User from '../User/user'; 

describe('User Component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <User />
        </MemoryRouter>
      </Provider>
    );
  });
});
