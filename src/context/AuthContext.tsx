import { createContext } from 'react';

export type AuthContextType = {
  isLoggedIn: boolean;
  isAdmin: boolean;
  login: () => void;
  logout: () => void;
  adminLoggedIn: () => void;
};
const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
