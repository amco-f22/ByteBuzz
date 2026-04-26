import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#0a3024',
            color: '#f5f0e8',
            border: '1px solid rgba(194, 165, 120, 0.2)',
            borderRadius: '12px',
            fontFamily: "'Source Sans 3', sans-serif",
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
);
