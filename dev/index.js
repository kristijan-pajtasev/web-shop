import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import WebShop from './providers/WebShop'
import Product from './providers/Product'
import Navigation from './providers/Navigation'

const App = () => {
    return (
        <Router>
            <Navigation />
            <Route path="/" exact component={WebShop} />
            <Route path="/product/:id" exact component={Product} />
        </Router>
    )
};

ReactDOM.render(<App />, document.getElementById('web-shop-container'));

