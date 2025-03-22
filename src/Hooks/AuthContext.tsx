import * as React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { ApiGetUser,ApiLogin,ApiLogout } from '../Api/ApiLogin';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    let tokenUser = document.cookie.split(';').find(cookie => cookie.startsWith('token='))?.split('=')[1];

    if (tokenUser) {
      setUser({
        id: tokenUser,
        email: tokenUser,
        name: tokenUser
      });
    }
    console.log("Dashboard");
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const userData = ApiLogin(email, password);
      setUser({
        id: userData.token,
        email: userData.email,
        name: userData.user
      });
      } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    ApiLogout();
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    logout,

  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
