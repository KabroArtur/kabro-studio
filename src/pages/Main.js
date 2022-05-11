import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Signup from './Form/Signup';
import Login from './Form/Login';
import Reset from './Form/Reset';
import Shop from './Shop';
import About from './About';
import Contact from './Contact';
import Dash from './../pages/Dashboard/Dashboard';
import Add from './Add/Add';
import ProductPage from './ProductPage/ProductPage';
import ProductPageAdmin from './ProductPage/adminProductPage';
import NotFoundPage from './NotFoundPage';

const Main = () => {


  return (
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route path="*" element={<NotFoundPage/>} />
        <Route  path='/dashboard' element={<Dash/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/signup' element={<Signup/>}/>
        <Route  path='/reset-password' element={<Reset/>}/>
        <Route  path='/shop' element={<Shop/>}/>
        <Route  path='/about-us' element={<About/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/add' element={<Add/>}/>
        <Route path="product">
        <Route path=":postsid" element={<ProductPage/>} />
        </Route>
        <Route path="productAdmin">
        <Route path=":postsidAdmin" element={<ProductPageAdmin/>} />
      </Route>  
    </Routes>
  )
}

export default Main;