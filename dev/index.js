import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import WebShop from './providers/WebShop'
import Product from './providers/Product'
import Navigation from './providers/Navigation'
import ShoppingCart from './providers/ShoppingCart'

const App = () => {
    return (
        <Router>
            <Navigation />
            <Route path="/" exact component={WebShop} />
            <Route path="/product/:id" exact component={Product} />
            <Route path="/shopping-cart" exact component={ShoppingCart} />
        </Router>
    )
};

ReactDOM.render(<App />, document.getElementById('web-shop-container'));

