import React, { useState }  from 'react'

const Item = ({ id, name, qty }) => {




    return (
        <ul>
            <li>ProductName:{name}</li>
            <li>Quantity:{qty}</li>
            <li></li>
        </ul>
    )
}
export default Item