import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext, { AuthContextType } from '../context/AuthContext';

const AdminProtectedRoute = () => {
  const auth = useContext(AuthContext) as AuthContextType;


  if (!auth.isAdmin ) {
    return <Navigate to='/' replace />;
  }

  return <Outlet />;
};
export default AdminProtectedRoute;
