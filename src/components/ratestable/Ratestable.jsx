import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Ratestable = () => {
  const [currencies, setCurrencies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchCurrencies = async () => {
      const res = await axios.get('https://api.coingecko.com/api/v3/exchange_rates')
      setCurrencies(res.data.rates)
      setLoading(false)
    }
    fetchCurrencies()
  }, [])
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (!currencies) {
    return <h1>No currencies to show</h1>
  }
  const { name, unit, value, type } = currencies.btc
  console.log(currencies);
  return (
    <>
    <div className="mainPage">
      <div className="tableBlock">
          <p>
          {name}, {unit}, {value}, {type}
          </p>
      </div>
    </div>
    </>
  )
};

export default Ratestable;
