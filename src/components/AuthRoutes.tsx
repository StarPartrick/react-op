import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface AuthRouteProps {
  children: ReactNode[]; // 多个子元素
}

export const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const token = JSON.parse(localStorage.getItem('Token') ?? '')?.token;
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to={'/login'} replace />;
  }
};
