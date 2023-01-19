import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// context provider
import { UserContextProvider } from './context/UserContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);