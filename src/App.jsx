import './App.css'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes/Routes';
import { AuthProvider } from './Hooks/AuthContext';

function App() {

  return (
<Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  )
}

export default App
