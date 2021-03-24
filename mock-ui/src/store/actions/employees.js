import axios from 'axios';
import { SET_EMPLOYEES_LIST, EMPLOYEES_ERROR } from './types';

const endpoint = `${process.env.REACT_APP_API_ENDPOINT}/employees`;

const fetchEmployees = () => async (dispatch) => {
    try {
        const response = await axios.get(endpoint);

        dispatch({ type: SET_EMPLOYEES_LIST, payload: response.data });
    } catch(exception) {
        dispatch({ type: EMPLOYEES_ERROR, payload: exception.message });
    }
}

const addEmployee = (employee) => async (dispatch) => {
    try {
        const response = await axios.post(endpoint, employee);
        
        dispatch(fetchEmployees());
    } catch (exception) {
        dispatch({ type: EMPLOYEES_ERROR, payload: exception.message });
    }
}

const deleteEmployee = (employee) => async (dispatch) => {
    try {
        const deleteEndpoint = `${endpoint}/${employee.id}`;
        
        await axios.delete(deleteEndpoint)
        dispatch(fetchEmployees());
    } catch (exception) {
        dispatch({ type: EMPLOYEES_ERROR, payload: exception.message });
    }
}

export {
    fetchEmployees,
    addEmployee,
    deleteEmployee
}
