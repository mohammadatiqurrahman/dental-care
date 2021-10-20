import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowInfo from '../../ShowInfo/ShowInfo';

const Information = () => {
    const [infos,setInfo] = useState([])
    useEffect(()=>{
        fetch('./information.json')
        .then(res=>res.json())
        .then(data=>setInfo(data))
    },[])
    return (
        <div className="container mt-4 pt-4 mb-4 pb-4">
            <h5 className="mt-4 mb-4">Welcome to Cosmetic Dental Care</h5>
            <p className="ms-4 me-4 ps-4 pe-4">We give you a healthy smile not just for today but for the rest of your life. Our experienced team can help you to achieve a smile that not only looks great but feels great too. We sincerely believe that visiting a dentist shouldn’t be a frightening or stressful experience!</p>
           <div className="mt-4">
           <Row xs={1} md={2} lg={3} className="g-4">
            {
                infos.map(info=><ShowInfo info={info}></ShowInfo>)
            }
            </Row>
           </div>
        </div>

    );
};

export default Information;