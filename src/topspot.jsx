import React from 'react';

export default props => (
    <div className='well'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <button type="button" className="btn btn-primary">
            <a href={"https://maps.google.com/?q="+props.location[0]+","+props.location[1]}>Locate</a>
        </button> 
    </div>
);

