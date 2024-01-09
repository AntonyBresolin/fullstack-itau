import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import LandingPage from './views/LandingPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);


reportWebVitals();
