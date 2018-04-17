import React from 'react';
import {Link} from 'react-router-dom';

const ProjectOne = (props) => {
    console.log(props);
    return (
    <div>
      <h1>Stuff</h1>
      <p>Fun project with id of {props.match.params.id}</p>
     <Link to="/portfolio">Back to the Portfolio</Link>
    </div>
    )
    
}

export default ProjectOne; 