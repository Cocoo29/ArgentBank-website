import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home/home';
import SignIn from './pages/Login/login';
import User from './pages/User/user';
import Error404 from './pages/Page404/Page404';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/profile" element={<User />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
