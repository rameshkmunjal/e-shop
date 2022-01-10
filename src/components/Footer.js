import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Footer=()=>(
    <Container fluid className="footer-container">
        <Row>
            <Col lg={4}>
                <address>
                    <h5>E-Shop Private Limited</h5>
                    <ul>
                        <li>154, Golf Course Extension Road</li>
                        <li>Sector-55, Gurugram</li>
                        <li>Pincode - 122001</li>
                    </ul>                    
                </address>
            </Col>
            <Col lg={4}>
                <footer>
                    <h5>Categories</h5>
                    <ul className="footer-links-ul">
                        <li><Link className="footer-link" to={`/product/category/${"men's clothing"}`}>Men's Clothing</Link></li>
                        <li><Link className="footer-link" to={`/product/category/${"women's clothing"}`}>Women's Clothing</Link></li>
                        <li><Link className="footer-link"to={`/product/category/${"jewelery"}`}>Jewellery</Link></li>
                        <li><Link className="footer-link" to={`/product/category/${"electronics"}`}>Electronics</Link></li>
                    </ul>                    
                </footer>
            </Col>
            <Col lg={4}>
                <footer>
                    <h5>Follow us on </h5>
                    <p className="social-media-links">
                        <span><i className="fab fa-twitter"></i></span>
                        <span><i className="fab fa-facebook"></i></span>
                        <span><i className="fab fa-instagram"></i></span>
                        <span><i className="fab fa-youtube"></i></span>
                        <span><i className="fab fa-google"></i></span>
                    </p>
                </footer>
            </Col>
        </Row>
    </Container>
);

export default Footer;