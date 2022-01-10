import React from 'react';
import {  useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import {Container, Row} from 'react-bootstrap';
import Product from '../components/Product';
import Header from '../components/Header';
import Footer from '../components/Footer';


const SingleCategoryScreen=()=>{
    const {cat_name}=useParams();
    console.log("category in singleProductScreen", cat_name);
    const products=useSelector((state)=>state.productList.products);
    console.log(products);
    const categoryProducts=products.filter(product=>product.category===cat_name);        
    console.log(categoryProducts);

    const retrievedList=()=>{
        return categoryProducts.map(product=>{
            return (
              <Product key={product.id} product={product} /> 
            )
        })
      }
    
    return(
        <>
        <Header />
        <Container>
        <h3 className="category-page-heading">Category Selected : {cat_name}</h3>
            <Row>   
                {retrievedList()}
            </Row>
        </Container>
        <Footer />
        </> 
    )
}
    

export default SingleCategoryScreen;