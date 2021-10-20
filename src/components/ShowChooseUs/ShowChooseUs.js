import React from 'react';
const ShowChooseUs = (props) => {
    const {img,tag,tagDis} = props.ch
    return (
        <div className="col-sm-12 col-md-3 col-lg-3 text-start p-4 service">
        <img style={{width: '50px'}} src={img} alt="" />
        <br /><br />
        <h6>{tag}</h6><br />
        <p>{tagDis}</p>        
    </div>
    );
};

export default ShowChooseUs;