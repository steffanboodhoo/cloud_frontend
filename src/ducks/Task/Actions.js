import Axios from "axios";

const RECIEVE_TASKS = 'TASK/RECIEVE_TASKS';

export const types = {RECIEVE_TASKS};

export const get_tasks = (filters={}, fields=[]) => {
    return dispatch => {
        const params = {fields, filters}
        Axios.post('http://localhost:9000/task/select/open',params).then( resp => {
            console.log(resp)
            dispatch({
                type: RECIEVE_TASKS,
                payload: {tasks:resp.data}
            }); 
        })
    }
}

