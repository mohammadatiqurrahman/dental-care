import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowDoctor from '../ShowDoctor/ShowDoctor';

const Doctors = () => {
    const [doctors,setDoctors] = useState([])
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div className="container mt-4 pt-4">
            <h5 className="mb-4">Doctors</h5>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    doctors.map(dr=><ShowDoctor
                    key={dr.id}
                    dr={dr}
                    ></ShowDoctor>)
                }
            </Row>
        </div>
    );
};

export default Doctors;