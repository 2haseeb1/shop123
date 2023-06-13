import './Shop.css'
import Product from './Product'
import Products from './Products'
import { useEffect, useState } from 'react'
const Shop = () => {
  const [products, setProducts] = useState([])
  const[cart,setCart]=useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data=>setProducts(data))
    }, [])
  const handleAddtoCart = (product) => {
    
    const newCart = [...cart, product]
    setCart(newCart)

  }
  return (
    <div className="shop-container">
          <div className='products-container' style={{background:"teal"}} >
              <Products />
        {products.map(product => <Product key={product.id}  product={ product}  handleAddtoCart={handleAddtoCart} />)}
     </div>
          <div className='cart-container'>
        <h1 style={{marginBottom:"10px"}}>Order Summery</h1>
        <h3 style={{color:'orange'}}>Selected Items:{cart.length}</h3>
              
     </div>
    </div>
  )
}

export default Shop
