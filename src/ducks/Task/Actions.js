import Axios from "axios";

const RECIEVE_TASKS = 'TASK/RECIEVE_TASKS';

export const types = {RECIEVE_TASKS};

export const get_tasks = (fields=[], filters={}) => {
    return dispatch => {
        const params = {fields, filters}
        Axios.post('http://localhost:9000/task/select/open',filters).then( resp => {
            dispatch({
                type: RECIEVE_TASKS,
                payload: {tasks:resp.data}
            }); 
        })
    }
}

