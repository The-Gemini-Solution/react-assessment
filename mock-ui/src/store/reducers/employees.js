import { EMPLOYEES_ERROR, EMPLOYEES_LIST } from '../actions/types';

const initialState = {
    error: null,
    list: []
}

export default function(state = initialState, action) {
    
    switch (action.type) {
        case EMPLOYEES_ERROR: 
            return {
                ...state,
                error: action.payload
            }

        case EMPLOYEES_LIST: {
            return {
                ...state,
                list: [...action.payload]
            }
        }

        default:
            return state;
    }
}