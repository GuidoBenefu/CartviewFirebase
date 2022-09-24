import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Cart from '../components/Cart';
import ItemDetailContainer from '../components/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer';
import NavBar from '../components/NavBar';


const Router = () => {
    return (
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/shop' element = {<ItemListContainer/>}/>
            <Route path='/shop/item/:id' element = {<ItemDetailContainer/>}/>
            <Route path='/shop/:categoryId' element = {<ItemListContainer/>}/>
            <Route path='/Cart' element = {<Cart/>}/>
          </Routes>
        </BrowserRouter>
      );
}

export default Router