import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TextContextProvider } from './TextContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TextContextProvider>
      <App />
    </TextContextProvider>
);
