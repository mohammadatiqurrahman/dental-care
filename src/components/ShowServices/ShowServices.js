import React from 'react';
import { Link } from 'react-router-dom';
import './ShowServices.css'

const ShowServices = (props) => {
    const {typeName,description,img} = props.service
    return (
        <div className="col-sm-12 col-md-3 col-lg-4 text-start p-4 service">
            <img style={{width: '100px'}} src={img} alt="" />
            <br /><br />
            <h6>{typeName}</h6><br />
            <p>{description.slice(0,174)}</p>
            <Link to="/show_details"><button style={{border: 'none'}}>View Details</button></Link>
            
        </div>
    );
};

export default ShowServices;