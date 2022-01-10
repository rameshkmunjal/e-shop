import React, { useEffect } from 'react';
import {Container, Row} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Product from '../components/Product';
import { listProducts  } from '../actions/productActions';
import Footer from '../components/Footer';


const ProductListScreen = ({ history}) => {
  

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { products } = productList


  useEffect(() => {
    dispatch(listProducts(''))    
  }, [
    dispatch,
    history
  ])

  const retrievedList=()=>{
    return products.map(product=>{
        return (
          <Product key={product.id} product={product} /> 
        )
    })
  }

  return (
    <>    
        <Header />
        <Container fluid className="product-list-container">
          <Row>
            {retrievedList()}
          </Row>          
        </Container> 
        <Footer/>
          
    </>
  )
}

export default ProductListScreen
