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


const OPERATION_MAP = {
    'BACKUP_CREATE':'/cust_task_backup_create',    
    'BACKUP_REMOVE':'/cust_task_backup_remove'    
}   
export const handle_cust_operations = ( params ) => {
    let url = 'http://localhost:9000';
    if (params.task_code in OPERATION_MAP)
        url += OPERATION_MAP[params.task_code]
    else
        url += '/cust_task_generic'
    
    // return dispatch => {
        Axios.post(url, params).then ( resp => {
            console.log(resp);
        })
    // }
}