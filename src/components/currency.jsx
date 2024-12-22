import React from 'react';
import '../css/currency.css';

function Currency() {
  return (
    <div className="currency-div">
      <div>
        <h3
          style={{
            marginTop: '-20px',
            fontSize: '24px',
            fontFamily: 'arial',
            borderRadius: '10px',
            padding: '5px',
          }}
        >
          {' '}
          CURRENCY{' '}
        </h3>
      </div>
      <div>
        <input type="number" className="amount" />
        <select className="from-currency-option">
          <option>USD</option>
          <option>TL</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>

        <i class="fas fa-arrow-right"></i>

        <select className="to-currency-option">
          <option>TL</option>
          <option>EUR</option>
          <option>USD</option>
          <option>GBP</option>
        </select>

        <input type="number" className="result" />
      </div>
      <div>
        <button className="exchange-button">Exchange</button>
      </div>
    </div>
  );
}

export default Currency;
