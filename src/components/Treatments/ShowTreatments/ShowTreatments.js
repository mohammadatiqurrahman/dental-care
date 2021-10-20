import React from 'react';
import { Link } from 'react-router-dom';

const ShowTreatments = (props) => {
    const {img,description,typeName} = props.treatment;
    return (
        <div>
        <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="d-flex pb-4">
                <div>
                    <img style={{width:'150px'}} src={img} alt="" />
                </div>
                <div className="text-start ps-4 ms-4">
                    <h5>{typeName}</h5>
                    <p>{description}</p>
                    <Link to="/home">Read More</Link>
                </div>

            </div>
            
        </div>
        </div>
    );
};

export default ShowTreatments;