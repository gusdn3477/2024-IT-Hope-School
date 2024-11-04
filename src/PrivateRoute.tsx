import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from './stores/useAuthStore';

const PrivateRoute = () => {
  const { authenticated } = useAuthStore();

  if (authenticated) return <Outlet />;
  return <Navigate to="/" replace />;
};

export default PrivateRoute;
