import React, { useState, useEffect} from 'react';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import Main from './pages/Main';

import Header from './components/Header/Header';
import HeaderUser from './components/Header/HeaderUser';
import Footer from './components/Footer/Footer';
import Aside from './components/Header/Aside';

function App (){

  const [user] = useAuthState(auth);

  return (     
    <PayPalScriptProvider options={{ "client-id": "AR7ABmfGjHWjwFmKwGrYRExyphzfq2I_wvlX0UzcOOUXOhGyfHB9eWdSwSjQJk1BMKkoTpUwgdgy3bbf" }}>

    { user ? ( <HeaderUser/> ) : ( <Header/> )}
           <Aside/>
        <Main />
        <Footer/>
    </PayPalScriptProvider>
    )

}

export default App;
