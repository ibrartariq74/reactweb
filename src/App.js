import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import Navbar from './container/Navbar';

import Product from './container/Product';
import Details from './container/Details';
import Cart from './container/Cart';

function App() {


  return (
    <Router>
     <Navbar/>
         <Route path="/" exact component={Product}  />
         <Route path="/details/:id" exact component={Details} />
         <Route path="/cart" exact component={Cart} />
         
      
    </Router>
  
  );
}

export default App;
