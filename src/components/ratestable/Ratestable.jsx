import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Ratestable = () => {
  const [currencies, setCurrencies] = useState([])

  useEffect(() => {
    const fetchCurrencies = async () => {
      const res = await axios.get('https://api.coingecko.com/api/v3/exchange_rates')
      setCurrencies(res.data.rates)
    }
    fetchCurrencies()
  }, [])
  console.log(currencies.btc.name);
  return (
    <div className="mainPage">
      <div className="tableBlock">
        <table className="mainTable">
          <thead>
            <tr>
              <th>name</th>
              <th>type</th>
              <th>unit</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>crypto</td>
              <td>BTC</td>
              <td>1.0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default Ratestable;
