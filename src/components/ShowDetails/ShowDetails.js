import React, {useState,useEffect } from 'react';
import { useParams } from 'react-router';


const ShowDetails = () => {
    let {detailId} = useParams();
    const [singleServices,setSingleServices]=useState([])
    const [details,setDetails] = useState({})
    useEffect(()=>{
        fetch('/dentalDetails.json')
        .then(res=>res.json())
        .then(data=>setSingleServices(data))
    },[detailId]);

    useEffect(()=>{
        const values = singleServices?.find(service=>service.id === parseInt(detailId))
        setDetails(values);
    },[singleServices])

       
    return (
 
        <div className="w-50 mx-auto">
        <div className="col-sm-12 col-md-12 col-lg-12 mt-4 pt-4">
        <img style={{width: '200px'}} src={details?.img} alt="" />
          <h5 className="pt-4 pb-4">{details?.typeName}</h5>
          <p>{details?.description}</p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12 mt-4 pt-4">
        <img style={{width: '300px'}} src={details?.drimg} alt="" />
          <h5 className="pt-4">{details?.drname}</h5>
          <p>{details?.designation}</p>
        </div>
        </div>
    );
};

export default ShowDetails;