import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowTreatments from './ShowTreatments/ShowTreatments';

const Treatments = () => {
    const [treatments,setTreatments] = useState([])
    useEffect(()=>{
        fetch('/treatments.json')
        .then(res=>res.json())
        .then(data=>setTreatments(data))
    },[])
    return (
        <div className="w-75 mx-auto mt-4 pt-4">
            <Row xs={1} md={1} lg={1} className="g-4">

            {
                treatments.map(treatment=><ShowTreatments 
                    key={treatment.id}
                    treatment={treatment}></ShowTreatments>)
            }
            </Row>
        </div>
    );
};

export default Treatments;