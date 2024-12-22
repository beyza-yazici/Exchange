import React from 'react';
import '../css/currency.css';
import { useState } from 'react';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_kAVeSM40bMxD7OuTABR9D1CbrVft2lFZQenZSORa";

function Currency() {

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TL");
  const [result, setResult] = useState(0);

  const exchange = () => {
    console.log(amount);
    console.log(fromCurrency);
    console.log(toCurrency);
  }
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
        <input 
        value ={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number" className="amount" />
        <select onChange={(e) => setFromCurrency(e.target.value)} className="from-currency-option">
          <option>USD</option>
          <option>TL</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>

        <i class="fas fa-arrow-right"></i>

        <select onChange={(e) => setToCurrency(e.target.value)} className="to-currency-option">
          <option>TL</option>
          <option>EUR</option>
          <option>USD</option>
          <option>GBP</option>
        </select>

        <input 
        value={result} 
        onChange={(e) => setResult(e.target.value)}
        type="number" className="result" />
      </div>
      <div>
        <button 
        onClick={exchange}
        className="exchange-button">Exchange</button>
      </div>
    </div>
  );
}

export default Currency;
