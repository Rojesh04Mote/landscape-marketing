import * as React from 'react';
import Navbar from "@/components/elements/Navbar";
import '../styles/globals.css';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducer';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { legacy_createStore as createStore, compose, applyMiddleware } from "redux";


const composeEnhancers =
    typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);
const makeStore = () => createStore(rootReducer, enhancer);



const wrapper = createWrapper(makeStore);

function MyApp({ Component, pageProps }) {


    return (
        <Provider store={makeStore()}>
            <Navbar />
            <Component {...pageProps} />

        </Provider>
    )

}

export default wrapper.withRedux(MyApp)


