import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = (props) => {
    return (
    <div>
      <h1>Portfolio</h1>
      <p>Check out what I've been working on!</p>
      <Link to="/portfolio/1">Project One</Link>
      <Link to="/portfolio/2">Project Two</Link>
    </div>
    )
    
};
            
export default Portfolio; 