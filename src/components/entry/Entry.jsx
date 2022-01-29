import React from 'react';
import './entry.css';

const Entry = ({ currencies }) => {
    return (
        <>
        {currencies.map( (currency) => (
            <tr className="tableRow">
               <td className="tableData">{currency.name}</td> 
               <td className="tableData">{currency.type}</td> 
               <td className="tableData">{currency.unit}</td> 
               <td className="tableData">{currency.value}</td> 
            </tr>
        ))}
        </>
    )
};

export default Entry;
