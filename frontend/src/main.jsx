// External Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

// Internal Imports
// Context
import { AppProvider } from '@/context/AppContext.jsx';
// App/Router
import App from '@/App.jsx';
// Styles
import Theme from '@/Theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </AppProvider>
  </React.StrictMode>
);
