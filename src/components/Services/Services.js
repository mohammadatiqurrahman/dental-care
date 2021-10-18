import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowServices from '../ShowServices/ShowServices';

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('./dentals.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="container mt-4 pt-4">
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                services.map(service=><ShowServices
                key={service.id}
                service={service}
                ></ShowServices>)
            }
            </Row>
        </div>
    );
};

export default Services;