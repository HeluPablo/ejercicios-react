import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// La estructura de lo que se importa es la siguiente: 
// Primero escribo la palabra import
// Segundo el nombre de lo que necesito
// Tercero escribo la palabra from
// Cuarto escribo la ruta de lo que necesito.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);