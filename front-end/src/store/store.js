import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { thunk } from 'redux-thunk'; // Utilisation de l'importation nommée
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer } from '../reducers/UserReducer';
import { loginReducer } from '../reducers/loginReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  userLogin: loginReducer,
  userProfile: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk];

let composeEnhancers = compose;

// Configure Redux DevTools Extension
if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const enhancers = composeEnhancers(
  applyMiddleware(...middlewares)
);

const store = createStore(persistedReducer, enhancers);

export const persistor = persistStore(store);
export default store;
