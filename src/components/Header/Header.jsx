import logo from '../images/Logo.svg'
import './Header.css'

/* function Header() {
  return (
    <>
    <nav className='header'>
      <img src={logo} alt="" />
      <div className='space'>
        <a href="">shop</a>
        <a href="">order</a>
        <a href="">inventory</a>
        <a href="">Login</a>
      </div>
      </nav>
      </>
  )
} */

const Header = () => {
  return (
      <nav className='header'>
          <img src={logo} alt="" />
          <div>
          <a href="/shop">Shop</a>
              <a href="/order">Orders</a>
              <a href="/inventory">Inventory</a>
              <a href="/login">Login</a>     
          </div>
      </nav>
  );
};

export default Header
