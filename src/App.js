import React from "react";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
export default function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>

     <Route exact path="/">
     <Home/>
     </Route>  
   <Route path="/add" component={()=> <AddContact/>}></Route> 
    <Route path="/edit/:id">
      <EditContact/>
      </Route>


      </Switch>
      </Router>
  );
}
