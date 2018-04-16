import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from "../components/Header"; 
import HomePage from "../components/HomePage";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import NotFoundPage from "../components/NotFound"; 



const AppRouter = () => (
<BrowserRouter>
 <div>
   <Header />
  <Switch>
   <Route
    path="/" 
    component={HomePage}
    exact={true}
   />
   <Route
    path="/contact" 
    component={Contact}
   />
   <Route
    path="/portfolio" 
    component={Portfolio}
   />
   <Route
     component={NotFoundPage}
   />
  </Switch> 
 </div>
  
</BrowserRouter>

);




export default AppRouter; 