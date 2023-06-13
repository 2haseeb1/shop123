import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    console.log(props)
    const handleAddtoCart = props.handleAddtoCart;
    const{name,seller,quantity,img,price}=props.product
  return (
      <div>
      <img src={img} alt="" width="250px"/>
      <h6>{name}</h6>
      <h6>{seller}</h6>
          <h3>${price}</h3>
          <button style={{ background: "red", width: "73%", height: "35px", borderRadius: "rounded" }} onClick={() => handleAddtoCart(props.product)}
          
          
          >AddToCart <FontAwesomeIcon icon={faShoppingCart} /></button> 
    </div>
  )
}

export default Product
