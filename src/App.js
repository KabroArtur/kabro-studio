import React, { useState, useEffect} from 'react';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Main from './pages/Main';

import Header from './components/Header/Header';
import HeaderUser from './components/Header/HeaderUser';
import Footer from './components/Footer/Footer';
import Aside from './components/Header/Aside';

function App (){

  const [user] = useAuthState(auth);

  return (      
  <>
    { user ? ( <HeaderUser/> ) : ( <Header/> )}
   
      <Aside/>
      <Main />
      <Footer/>
    
</>)

}

export default App;
