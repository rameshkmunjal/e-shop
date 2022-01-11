import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import userImage from "../images/rkm.jpg";

const Header=()=>{
    const searchItem="Search ...";
    return(
        <Container fluid className="header-container">
            <Row className="nav-section">
                <Col lg={3} xs={3} className="logo-div">
                    <h4>
                        <Link to="/e-shop" className="header-heading-link">E-Shop</Link>
                    </h4>
                </Col>
                <Col lg={6} xs={5} className="search-div">
                    <input type="text" defaultValue={searchItem} className="search-input-box" />
                    <span className="search-btn-span"><i className="fas fa-search"></i></span>
                </Col> 
                <Col lg={3} xs={4} className="right-span">
                    <span className="bell-btn"><i className="fas fa-bell"></i></span>
                    <img className="user-image" src={userImage} alt="user" />
                </Col>               
            </Row>
        </Container>
    ) 
}

export default Header;