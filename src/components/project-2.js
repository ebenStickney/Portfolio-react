import React from 'react';
import {Link} from 'react-router-dom';

const ProjectTwo = (props) => {
    return (
    <div>
      <h1>Stuff</h1>
      <p>Fun project with id of {props.match.params.id}</p>
     <Link to="/portfolio">Back to the Portfolio</Link>
    </div>
    )
    
}

export default ProjectTwo; 