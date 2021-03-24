import { EMPLOYEES_ERROR, SET_EMPLOYEES_LIST } from '../actions/types';

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

        case SET_EMPLOYEES_LIST: {
            return {
                ...state,
                list: [...action.payload]
            }
        }

        default:
            return state;
    }
}