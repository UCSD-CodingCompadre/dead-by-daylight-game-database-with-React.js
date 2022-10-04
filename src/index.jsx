import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
// import store from './utilities/store'
// import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
     {/* </Provider> */}
  </React.StrictMode>
);

