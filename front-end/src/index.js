import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/store';
import store from './store/store';
import App from './App';
import './index.css';
import loadFontAwesome from './assets/FontAwesome/fontAwesome';

// Fonction pour rendre l'application
const renderApp = () => {
  createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

// Charge les polices FontAwesome
loadFontAwesome();

// Rendre l'application
renderApp();


if (process.env.NODE_ENV === 'development') {
  console.log('Mode développement');

} else {
  console.log('Mode production');

}
