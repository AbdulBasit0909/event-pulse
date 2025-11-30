import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google'; 

const GOOGLE_ID = "593598799714-bvqj4db4190lbuhbu1scnduuplpop0da.apps.googleusercontent.com";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_ID}>
        <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
