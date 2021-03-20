import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history'


import App from './src/App';
import EmployeeList from './src/components/employees/List';

import { configureStore } from './src/store';
import { Provider } from 'react-redux';

const history = createBrowserHistory({});
const store = configureStore(history, {});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App>
                    <Route path="/" exact component={ EmployeeList } />
                </App>
            </ConnectedRouter>
        </Provider>
    </React.StrictMode>,
    document.querySelector('#root')
)