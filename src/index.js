import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
//import { createStore } from "redux";
import { Provider } from "react-redux";
import store from './store';
//import reducer from './component/common/reducer/root-reducer'

/* const store = createStore(reducer);
//store.dispatch({type: "DropDown"})
store.dispatch() */
 ReactDOM.render(
 <Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
); 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))store={store}
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
