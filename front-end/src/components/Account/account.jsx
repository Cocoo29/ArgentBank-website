import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './account.css';

function Account({ title = 'Account Title', amount = '0.00', description = 'Account description' }) {
  const navigate = useNavigate();

  const handleTransactionClick = () => {
    navigate('/error404'); // Redirection vers la page Error404
  };

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button" onClick={handleTransactionClick}>
          View transactions
        </button>
      </div>
    </section>
  );
}

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string.isRequired,
};

export default Account;
