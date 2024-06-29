// components/Navigation/navigation.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; // Utilisez useNavigate
import { logout } from '../../actions/actions';
import logo from '../../assets/argentBankLogo.png';
import './navigation.css';

function Navigation() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.userLogin);
  const { firstName } = useSelector((state) => state.userProfile);
  const navigate = useNavigate(); // Initialisez useNavigate

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/login'); // Utilisez navigate pour rediriger
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
      </Link>
      <div>
        {!token ? (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          ''
        )}
        {token ? (
          <Link className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle"></i>
            {firstName}
          </Link>
        ) : (
          ''
        )}
        {token ? (
          <Link className="main-nav-item" onClick={logoutHandler} to="/login">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        ) : (
          ''
        )}
      </div>
    </nav>
  );
}

export default Navigation;
