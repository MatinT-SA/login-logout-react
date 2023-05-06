import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { AuthContextProvider } from './context/auth-content'

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
);