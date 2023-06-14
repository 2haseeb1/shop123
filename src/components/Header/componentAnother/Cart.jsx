import React from 'react'
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
  return (
    <div>
      <h1 style={{marginBottom:"10px"}}>Order Summery</h1>
          <h3 style={{ color: 'orange' }}>Selected Items: { cart.length}</h3>        
          <h3 style={{ color: 'orange' }}>TotalPrice:$ { total}</h3>        
          <h3 style={{ color: 'orange' }}>Total Shipping: </h3>        
    </div>
  )
}

export default Cart
