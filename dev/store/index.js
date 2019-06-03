import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk';
import products from './reducers/products';
import product from './reducers/product';
import shoppingCart from './reducers/shopping_cart';
import filters from './reducers/filters';
import recommendations from './reducers/recommendations';

const reducer = combineReducers({ products, shoppingCart, product, filters, recommendations });
export default compose(applyMiddleware(thunkMiddleware))(createStore)(reducer);
