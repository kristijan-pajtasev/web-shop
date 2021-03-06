import React, { PureComponent } from "react";
import store from '../store';
import { Provider } from 'react-redux';
import Product from '../components/Product';


class ProductProvider extends PureComponent {
    render() {
        const { id } = this.props.match.params;
        return (
            <Provider store={store}>
                <Product productId={id} />
            </Provider>
        )
    }
}

export default ProductProvider;