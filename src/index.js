import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode is a tool for highlighting potential problems in an application.
  // It doesn't render any additional UI, but it enables extra checks during
  // development to help catch potential issues early in the development process.
  // Works only in the development environment.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);