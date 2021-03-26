import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;

  if (window.current_user) {
    const preloadedState = {
      entities: {
        users: { [window.current_user.id]: window.current_user }
      },
      session: { currentUserId: window.current_user.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } 
  else { store = configureStore(); }

  ReactDOM.render(<Root store={store}/>, root);
})