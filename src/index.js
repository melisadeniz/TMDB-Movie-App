import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider as ReduxProvider} from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './reduxStore';
import { QueryClient, QueryClientProvider } from 'react-query';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import store from "./reduxStore"
import 'bootstrap/dist/css/bootstrap.min.css';


const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <ReduxProvider store={store}>
  <PersistGate loading={null} persistor={persistor}>  
    
     <QueryClientProvider client={queryClient}>
      <App />
     </QueryClientProvider>
   
    </PersistGate>
    </ReduxProvider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
