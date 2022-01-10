import React from 'react';
//including dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListScreen from '../screens/ProductListScreen';
import AdminRoomScreen from '../screens/AdminRoomScreen';
import SingleProductScreen from '../screens/SingleProductScreen';
import SingleCategoryScreen from '../screens/SingleCategoryScreen';


const App=()=>{
    return(
        <BrowserRouter>            
            <Routes>
                <Route path="/e-shop" element={<ProductListScreen />} />
                <Route path="/product/:id" element={<SingleProductScreen />} />
                <Route path="/product/category/:cat_name" element={<SingleCategoryScreen />} />
                <Route path="/admin" element={<AdminRoomScreen />} />
            </Routes>
        </BrowserRouter>
        
    )
}

export default App;