import React, { PureComponent } from "react";
import store from '../store';
import { Provider } from 'react-redux';
import Navigation from '../components/Navigation';


class NavigationProvider extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        )
    }
}

export default NavigationProvider;