import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext, { AuthContextType } from '../context/AuthContext';

const AdminNavigation = () => {
  const auth = useContext(AuthContext) as AuthContextType;
    
    return (
      
        <div>
      
      <header className=" bg-dark text-white col-5">
    <div className="container p-1 row  ">
      {/* <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"> */}
      <div className='col-7'>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
        

          <li><NavLink to="/admin-menu" className="nav-link px-2 text-white">Menu</NavLink></li>
          <li><NavLink to="/admin-orders" className="nav-link px-2 text-white">Orders</NavLink></li>
      
        </ul>
 </div>
 <div className='col-5'>
        <div className=" me-0  ">
          <button type="button" className="btn btn-warning" onClick={auth.logout }> Log out</button>
        
        </div>
      </div>
    </div>
  </header>
      </div>
    )
  }

  export default AdminNavigation;