import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import AdminHeader from '../components/AdminHeader';
import { listProducts  } from '../actions/productActions';


const AdminRoomScreen = ({ history}) => { 

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList)
  const { products } = productList


  useEffect(() => {
    dispatch(listProducts(''))    
  }, [
    dispatch,
    history
  ])

  return (
    <>    
        <AdminHeader /> 
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>RATING</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.rating.rate}</td>                  
                </tr>
              ))}
            </tbody>
          </Table>
        </>
  )
}

export default AdminRoomScreen
