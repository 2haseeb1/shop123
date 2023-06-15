import React from 'react'
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
  let totalShipping = 0;
  let quantity=0
  for (const product of cart) {
   
    if (product.quantity === 0) {
      product.quantity=1
    }
      total = total + product.price * product.quantity;
      totalShipping = totalShipping + product.shipping;
      quantity = quantity + product.quantity;
    }
  return (
    <div>
      <h1 style={{marginBottom:"10px"}}>Order Summery</h1>
          <h3 style={{ color: 'orange' }}>Selected Items: { quantity}</h3>        
          <h3 style={{ color: 'orange' }}>TotalPrice:$ { total}</h3>        
          <h3 style={{ color: 'orange' }}>Total Shipping: ${ totalShipping}</h3>        
          <h3 style={{ color: 'orange' }}>Tax:${ (total*0.07).toFixed(2)}</h3>        
    </div>
  )
}

export default Cart
