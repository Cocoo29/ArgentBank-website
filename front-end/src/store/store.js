import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { thunk } from 'redux-thunk'; // Utilisation de l'importation nommée
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer } from '../reducers/UserReducer';
import { loginReducer } from '../reducers/loginReducer';


// Configuration pour la persistance avec Redux Persist
const persistConfig = {
  key: 'root', // Clé pour le stockage local
  storage, // Type de stockage (localStorage par défaut)
};

// Combine les reducers dans rootReducer
const rootReducer = combineReducers({
  userLogin: loginReducer,
  userProfile: userReducer,
  // Ajoute d'autres reducers si nécessaire
});

// Crée un reducer persistant
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware à appliquer (dans ce cas, juste thunk)
const middlewares = [thunk];

// Configure les enhancers avec Redux DevTools Extension
let composeEnhancers = compose;

// Utilise Redux DevTools Extension en mode développement
if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

// Crée le store Redux avec le reducer persistant et les enhancers
const enhancers = composeEnhancers(
  applyMiddleware(...middlewares)
);

const store = createStore(persistedReducer, enhancers);

// Crée un persistor pour le store persistant
export const persistor = persistStore(store);

export default store;
