import React from 'react';
import {Col, Card} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';


const Product=({product})=>{
    const navigate=useNavigate();

    const onSelectProduct=(e, id)=>{
        e.preventDefault();
        console.log(id);
        navigate(`/product/${id}`);
    }
    return(
        
        <Col  lg={3} onClick={(e)=>onSelectProduct(e, product.id)}>
            <div className="card-div">
                <Card.Img variant="top" src={product.image} className="card-image" />
                <Card.Body className="card-body">
                    <Card.Title className="text-center title">{product.title.substring(1, 20)}</Card.Title>
                    <Card.Text className="text-center ">
                        <span className="category">{product.category} </span>                    
                        <span className="price">{product.price * 100} </span>
                        <span className="rating">{product.rating.rate} </span>
                    </Card.Text>
                                             
                </Card.Body>
            </div>
        </Col>
        
    )
}

export default Product;