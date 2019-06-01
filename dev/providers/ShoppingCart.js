import React, { PureComponent } from "react";
import store from '../store';
import { Provider } from 'react-redux';
import ShoppingCart from '../components/ShoppingCart';


class ShoppingCartProvider extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <ShoppingCart />
            </Provider>
        )
    }
}

export default ShoppingCartProvider;