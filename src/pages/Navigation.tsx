import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext, { AuthContextType } from '../context/AuthContext';

const Navigation = () => {
  const auth = useContext(AuthContext) as AuthContextType;
  return (
    <div>
      <nav className='navbar-hk'>
        <a id='navsec' className='navbarsection'>
          <NavLink to='/'>Home</NavLink>
        </a>
        <a id='navsec' className='navbarsection'>
          <NavLink to='/menu'>Menu</NavLink>
        </a>
        {auth.isLoggedIn && auth.isAdmin &&(
          <a id='navsec' className='navbarsection'>
            <NavLink to='/admin-menu'>Admin</NavLink>
          </a>
        )}
        <a id='navsec' className='navbarsection'>
          <NavLink to='/orders'>Orders</NavLink>
        </a>
        <a id='navsec' className='navbarsection'>
          <NavLink to='/bookings'>Bookings</NavLink>
        </a>
        <a id='navsec' className='navbarsection'>
          <NavLink to='/deals'>Deals & Promotions</NavLink>
        </a>
        <a id='navsec' className='navbarsection'>
          <NavLink to='/gallery'>Gallery</NavLink>
        </a>
        <a id='navsec' className='navbarsection'>
          <NavLink to='/reviews'>Reviews</NavLink>
        </a>
        <a id='navsec' className='navbarsection'>
          <NavLink to='/about'>About</NavLink>
        </a>
        <a id='navsec' className='navbarsection'>
          <NavLink to='/contact'>Contact Us</NavLink>
        </a>
        {auth.isLoggedIn && (
          <a id='navsec' className='navbarsection'>
            <NavLink to='/mypage'>My Dashboard</NavLink>
          </a>
        )}
        {!auth.isLoggedIn && (


          <a id='navsec' className='navbarsection'>
            <NavLink to='/login'>Login</NavLink>
          </a>
        )}
        {!auth.isLoggedIn && (
          <a id='navsec' className='navbarsection'>
            <NavLink to='/register'>Register</NavLink>
          </a>
        )}
        <div className="logo">
          <img id='logo-img' src={require('../images/logo.png')} width="150px"></img>
        </div>
      </nav>

    </div>
  );
};
export default Navigation;
