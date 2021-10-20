import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ShowInfo.css'

const ShowInfo = (props) => {
    const {typeInfo,pera} = props.info
    return (
        <div className="pt-4">
    <Col className="p-4">
      <Card>
        <Card.Body className="p-4 text-start bg-color">
          <Card.Title>{typeInfo}</Card.Title>
          <Card.Text>
            {pera}
          </Card.Text>
          <Link><h6>Read More</h6></Link>
        </Card.Body>
      </Card>
    </Col>

        </div>
    );
};

export default ShowInfo;