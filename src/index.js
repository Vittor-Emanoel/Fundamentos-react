import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalProvider } from './contexts/GlobalContext';

import App from './App';

ReactDOM.render(
    <GlobalProvider>
    <App />
    </GlobalProvider>

  ,
  document.getElementById('root'),
);
