import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import configureReducers from './reducers';

const configureStore = (history, state) => {
    return createStore(
        configureReducers(history),
        state,
        composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
    )
}

export default configureStore;
