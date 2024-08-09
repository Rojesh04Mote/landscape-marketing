import Navbar from "@/components/elements/Navbar";
import '../styles/globals.css';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducer';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { legacy_createStore as createStore, compose, applyMiddleware } from "redux";

const composeEnhancers =
    (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);
const store = createStore(rootReducer, enhancer);

const makeStore = () => store;

const wrapper = createWrapper(makeStore);

function MyApp({ Component, pageProps }) {


    return (
        <Provider store={store}>
            <Navbar />
            <Component {...pageProps} />

        </Provider>
    )

}

export default wrapper.withRedux(MyApp)


