import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk';
import products from './reducers/products'

const reducer = combineReducers({ products });
export default compose(applyMiddleware(thunkMiddleware))(createStore)(reducer);
