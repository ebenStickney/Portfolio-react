import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from "../components/Header"; 
import NotFoundPage from "../components/NotFound"; 



const AppRouter = () => (
<BrowserRouter>
 <div>
   <Header />
  <Switch>
   <Route
     component={NotFoundPage}
   />
  </Switch> 
 </div>
  
</BrowserRouter>

);




export default AppRouter; 