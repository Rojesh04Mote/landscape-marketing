import * as React from 'react';
import Navbar from "@/components/elements/Navbar";
import '../styles/globals.css';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducer';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { legacy_createStore as createStore, compose, applyMiddleware } from "redux";
import { ConfigProvider } from 'antd';

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
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: "rgb(140, 140, 140)",
              headerBg: "rgb(140,140,140)",
              titleColor: "rgb(92,64,51)",
            },
          },
        }}
      >
        <Provider store={makeStore()}>
          <Navbar />
          <Component {...pageProps} />
        </Provider>
      </ConfigProvider>
    );

}

export default wrapper.withRedux(MyApp)


