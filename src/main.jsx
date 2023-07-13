import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from './states';
import './assets/css/style.css';
import router from './routes/routes';
import Loading from './container/components/Loading/loading';

axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <StrictMode> */}
    <Loading />
    <RouterProvider router={router} />
    {/* </StrictMode> */}
  </Provider>,
);
