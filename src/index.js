import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';


import RoutesA from './router/Routes';
import { theme } from './config/theme';
import { store } from './redux/store';
import './assets/styles/index.scss';
import { useSelector } from 'react-redux';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
					<RoutesA/>
		</ThemeProvider>
		</Provider> </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
