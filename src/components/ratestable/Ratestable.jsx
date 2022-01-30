import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Entry from '../entry/Entry'
import Loader from '../loader/Loader'
import './ratestable.css'


const Ratestable = () => {
  const [currencies, setCurrencies] = useState([])
  const [loading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchCurrencies = async () => {
      const { data: { rates } } = await axios.get('https://api.coingecko.com/api/v3/exchange_rates')
      for (const key in rates) {
        const element = rates[key]
        setCurrencies((prev) => [...prev, element])
      }
      setLoading(false)
    }
    fetchCurrencies()
  }, [])
  if (loading) {
    return <div className="mainTable"><Loader /></div> 
  }
  if (!currencies) {
    return (
      <div className="mainTable">
        <h1>No currencies to show</h1>
      </div>
          )
  }
  console.log(currencies);
  return (
    <div className="mainTable">
      <table>
        <thead className="tableHead">
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Unit</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <Entry currencies={currencies} />
        </tbody>
      </table>
    </div>
  )
}

export default Ratestable;
