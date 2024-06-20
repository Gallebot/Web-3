import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Buffer } from 'buffer';
import process from 'process';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

console.log(Buffer); // Esto es solo para verificar que Buffer está disponible
console.log(process); // Esto es solo para verificar que process está disponible