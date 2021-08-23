import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import App from "./App";
import {createStore} from "redux";
import contactReducer from "./redux/reducers/contactReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux"; 
const store = createStore(contactReducer,composeWithDevTools());

ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>,
  document.getElementById("root"));
