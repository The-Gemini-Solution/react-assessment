import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import employees from './employees';

const configureReducers = (history) => combineReducers({
    employees,
    router: connectRouter(history)
});

export default configureReducers;