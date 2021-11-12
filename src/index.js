import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Sagafunction from './Middleware/Sagafunction';
import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware } from 'redux';
const initialState={detailsData:[],user:{},productdata:[],coursesdata:[]}
function reducer(state=initialState,actions){
    switch(actions.type){
    case 'fetch' : return{detailsData:[...state.detailsData,actions.payload]}
    default : return state;
  }
}
const sagaMiddleware=createSagaMiddleware();
const store=createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(Sagafunction)
ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
   
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
