import React from 'react';
import { Image } from 'react-bootstrap';

const ShowDoctor = (props) => {
    const {name,edu,title,img} = props.dr
    return (
        <div>
            <div>
                {/* <img className="roundedCircle" src={img} alt="" /> */}
                <Image className="w-50" src={img} roundedCircle />
            </div>
            <div className="mt-4">
                <h5>{name}</h5>
                <p>{title}</p>
                <p>{edu}</p>
            </div>
        </div>
    );
};

export default ShowDoctor;