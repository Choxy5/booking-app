import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchContextProvider } from './context/SearchContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </React.StrictMode>
);

reportWebVitals();
