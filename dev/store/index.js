import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk';
import products from './reducers/products'
import product from './reducers/product'
import shoppingCart from './reducers/shopping_cart'

const reducer = combineReducers({ products, shoppingCart, product });
export default compose(applyMiddleware(thunkMiddleware))(createStore)(reducer);
