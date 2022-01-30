import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Entry from '../entry/Entry'
import Loader from '../loader/Loader'
import Pagination from '../pagination/Pagination'
import './ratestable.css'


const Ratestable = () => {
  const [currencies, setCurrencies] = useState([])
  const [loading, setLoading ] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [entriesPerPage] = useState(10)

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

  // Get Currencies to Show
  const indexOfLastCurrency = currentPage * entriesPerPage
  const indexOfFirstCurrency = indexOfLastCurrency - entriesPerPage
  const showingCurrencies = currencies.slice(indexOfFirstCurrency, indexOfLastCurrency)
  // Changing Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

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
  return (
    <>
    <div className="limiter">
      <div className="mainTable">
            <table>
              <thead className="tableHead">
                <tr>
                  <th className="column1">Name</th>
                  <th className="column2">Type</th>
                  <th className="column3">Unit</th>
                  <th className="column4">Value</th>
                </tr>
              </thead>
              <tbody>
                <Entry currencies={showingCurrencies} />
              </tbody>
            </table>
            <Pagination entriesPerPage={entriesPerPage} totalEntries={currencies.length} paginate={paginate}/>
      </div>
    </div>
  </>
        )
}

export default Ratestable;
