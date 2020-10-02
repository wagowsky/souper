import React from 'react';
import {Route} from "react-router-dom"
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/HomeScreen';
// import Products from './components/Products';
import Product from './components/Product';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Route exact path="/" component={HomeScreen}/>
        <Route path="/product/:id" component={Product}/>
        {/* <Route path="/cart/" component={Cart}/>
        <Route path="/login/" component={Login}/> */}
        
      </main>
      <Footer/>
    </>
  );
}

export default App;
