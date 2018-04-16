import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
   <h1>Eben Stickney</h1>
   <h4>Front End with React</h4>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink>
    <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
    
  
  </header>
)

export default Header;
