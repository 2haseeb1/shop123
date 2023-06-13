import { useState } from 'react'
import './Shop.css'
import { useEffect } from 'react'
import Product from '../Product/Product.jsx'
const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
        .then(data=>setProducts(data))
    },[])
  return (
      <div className="shop-container">
          <div className="products-container">
              {products.map(product => <Product key={product.id} product={product} />)}
          </div>
          <div className="cart-container">
              <h4>Order Summery</h4>
          </div>
      
    </div>
  )
}

export default Shop