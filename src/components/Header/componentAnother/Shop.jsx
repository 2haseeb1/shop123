import './Shop.css'
import Product from './Product'
import Products from './Products'
import { useEffect, useState } from 'react'
import Cart from './Cart'
import { addToDb, getShoppingCart } from './fakedb'
const Shop = () => {
  const [products, setProducts] = useState([])
  const[cart,setCart]=useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data=>setProducts(data))
    }, [])
    useEffect(() => {
      const storedCart = getShoppingCart()
      const savedCart=[]
      console.log("storedCart", storedCart)
      for (const id in storedCart) {
        console.log("id", id)
        const addedProduct = products.find(product => product.id === id)
      
      
        if (addedProduct) {
          const quantity = storedCart[id]
          addedProduct.quantity = quantity;
          savedCart.push(addedProduct)
        } 
        console.log("addedProduct",addedProduct)
      }
      setCart(savedCart)
    }, [products])
  const handleAddtoCart = (product) => {
    let newCart=[]
    /* const newCart = [...cart, product] */
    // if any product doesn't exist then set quantity=1
    // if wxists update the quanty by 1
    const exists = cart.find(pd => pd.id === product.id)
    if(!exists){
      product.quantity = 1;
      newCart=[...cart,product]
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter(pd => pd.id !== product.id)
      newCart = [...remaining, exists]
      
      
    }
    setCart(newCart)
    addToDb(product.id)
  }
  return (
    <div className="shop-container">
          <div className='products-container' style={{background:"teal"}} >
              <Products />
        {products.map(product => <Product key={product.id}  product={ product}  handleAddtoCart={handleAddtoCart} />)}
     </div>
          <div className='cart-container'>
        
        <Cart cart={cart} />
              
     </div>
    </div>
  )
}

export default Shop
