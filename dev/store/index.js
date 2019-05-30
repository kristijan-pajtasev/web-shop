import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk';
import products from './reducers/products'
import shoppingCart from './reducers/shopping_cart'

const reducer = combineReducers({ products, shoppingCart });
export default compose(applyMiddleware(thunkMiddleware))(createStore)(reducer);
