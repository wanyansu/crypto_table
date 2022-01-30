import React from 'react';
import './entry.css';

const Entry = ({ currencies }) => {
    return (
        <>
        {currencies.map( (currency) => (
            <tr>
               <td className="column1">{currency.name}</td> 
               <td className="column2">{currency.type}</td> 
               <td className="column3">{currency.unit}</td> 
               <td className="column4">{currency.value}</td> 
            </tr>
        ))}
        </>
    )
};

export default Entry;
