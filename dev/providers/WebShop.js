import React, {PureComponent} from "react";
import store from '../store';
import {Provider} from 'react-redux';
import WebShop from '../WebShop';


class WebShopProvider extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <WebShop />
            </Provider>
        )
    }
}

export default WebShopProvider;