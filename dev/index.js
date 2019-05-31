import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import WebShop from './providers'

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={WebShop} />
        </Router>
    )
};

ReactDOM.render(<App />, document.getElementById('web-shop-container'));

