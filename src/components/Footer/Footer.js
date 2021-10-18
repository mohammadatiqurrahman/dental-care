import React from 'react';
import { Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4 bg-dark mt-4">
                <div className="col-sm-12 col-md-3 col-lg-3">
                    <h4 className="pt-4">Contact Info</h4>
                    <ul className="text-white text-start pb-4 list-style">
                        <li>4566 Brownton Road Jackson, MS 39213</li>
                        <li>(800) 123-4567</li>
                        <li>info@dentistcareclinic.com</li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3">
                <h4 className="pt-4">Our Treatments</h4>
                    <ul className="text-white text-start pb-4 list-style">
                        <li>Dental Implants</li>
                        <li>Endodontics</li>
                        <li>Cosmetic Dentistry</li>
                        <li>General Dentistry</li>
                        <li>Cosmetic Dentistry</li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3">
                <h4 className="pt-4">Info Links</h4>
                    <ul className="text-white text-start pb-4 list-style">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Treatments</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 bg-dark">
                    <h1>gello</h1>
                </div>
            </Row>
        </div>
    );
};

export default Footer;