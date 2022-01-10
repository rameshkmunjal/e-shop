import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import { listProductDetails } from '../actions/productActions';

const SingleProductScreen=()=>{
    const {id}=useParams();
    const dispatch=useDispatch();
    
    const products=useSelector((state)=>state.productList.products);    
    let product=products.find(p=>p.id==id);    
    
    dispatch(listProductDetails(product));
    return(
        <Container>
            <Row>
                <Col className="single-product-div" lg={6}>
                    <h1>{product.title}</h1>
                    <div className="img-div">
                        <img src={product.image} alt={"product pic"} className="single-product-page-image" />
                    </div>                    
                    <h4>{product.rating.rate}</h4>
                    <h3>Offer Price:{product.price}</h3>                    
                    <h5>{product.category}</h5>
                    <p>{product.description}</p>
                    <div className="btn-div">
                        <button className="buy-now-btn">Buy Now</button>
                        <button className="add-to-cart-btn">Add To Cart</button>
                    </div>

                </Col>
            </Row>
        </Container>
        
        
    )

}

export default SingleProductScreen;