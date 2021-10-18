import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../resources/banner/img1.jpg'
import img2 from '../../resources/banner/img2.jpg'
import img4 from '../../resources/banner/img4.jpg'
import './Heading.css'

const Heading = () => {
    return (
    <div className="container mt-4">
<Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100 mx-auto heightt"
            src={img1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
            <img
            className="d-block w-100 heightt"
            src={img2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 heightt"
            src={img4}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
    );
};

export default Heading;