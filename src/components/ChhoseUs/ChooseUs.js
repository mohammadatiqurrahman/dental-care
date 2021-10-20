import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowChooseUs from '../ShowChooseUs/ShowChooseUs';

const ChooseUs = () => {
    const [choose,setChoose] = useState([])
    useEffect(()=>{
        fetch('./chooseus.json')
        .then(res=>res.json())
        .then(data=>setChoose(data))
    },[])
    return (
        <div className="container mt-4 pt-4">
            <h5 className="mt-4 pt-4 pb-4 mb-4">Why Choose Our Clinic?</h5>
            <Row xs={1} md={4} lg={4} className="g-4">
            {
                choose.map(ch=><ShowChooseUs ch={ch}></ShowChooseUs>)
            }
            </Row>
        </div>
    );
};

export default ChooseUs;