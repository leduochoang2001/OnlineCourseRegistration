import React, { } from 'react';
import { totalCost } from '../components/cart.js'
function Payment() {
    return (
        <div>
            <h1>total is {totalCost}</h1>
            {console.log(totalCost)}
        </div>
    )
}

export default Payment