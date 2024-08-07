import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/reset.css';
import './styles/styles.css';

import { GlobalStateProvider } from "./GlobalStateContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </React.StrictMode>
);
