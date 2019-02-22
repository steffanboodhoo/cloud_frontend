import Axios from 'axios';

import {listen_machine}  from '../Socket/Actions';
import { REQUEST_STATUS, REQUEST_NAME, update_request_status} from '../RequestStatus/Actions';

// const REQUEST_INSTANCE = 'INSTANCE/REQUEST_INSTANCE';
const RECIEVE_INSTANCES = 'INSTANCE/RECIEVE_INSTANCES';
const INIT_METRICS = 'INSTANCE/INIT_METRICS';
export const RECIEVE_METRIC = 'INSTANCE/RECIEVE_METRIC';
export const types = {RECIEVE_INSTANCES, RECIEVE_METRIC, INIT_METRICS};

export const request_instance = (params) => {
	const request_instance_status_pending = (dispatch)=>{ dispatch(update_request_status(REQUEST_STATUS.PENDING, REQUEST_NAME.REQUEST_INSTANCE));}
	const request_instance_status_success = (dispatch)=>{ dispatch(update_request_status(REQUEST_STATUS.SUCCESS, REQUEST_NAME.REQUEST_INSTANCE));}
	const request_instance_status_fail = (dispatch)=>{ dispatch(update_request_status(REQUEST_STATUS.FAIL, REQUEST_NAME.REQUEST_INSTANCE));}
	const request_instance_status_error = (dispatch)=>{ dispatch(update_request_status(REQUEST_STATUS.ERROR, REQUEST_NAME.REQUEST_INSTANCE));}

	return dispatch => {
		request_instance_status_pending(dispatch);
		Axios.post('http://localhost:8000/instance/request', params).then( resp =>{
			console.log(resp)
			if(resp.data.status == 'success'){
				request_instance_status_success(dispatch);
			}else{
				request_instance_status_fail(dispatch)
			}
		}).catch( err => {
			// The request was made and the server responded with a status code
			if(error.response){
				request_instance_status_fail(dispatch)
			//everything else
			}else{
				request_instance_status_error(dispatch)
			}
		})
	}
}

export const get_instances = (filters={}, fields=[]) => {
	const params = {fields, filters};
	return dispatch => {
		Axios.post('http://localhost:8000/instance/select/closed', params).then( resp => {
			const metrics = init_metric(resp.data);
			dispatch({
				type: INIT_METRICS,
				payload: metrics
			})	
			dispatch({
				type: RECIEVE_INSTANCES,
				payload: {instances:resp.data}
			});
			
		})
	}
}

export const get_running_instances = () => get_instances({status:'running'},[])

const init_metric = (instances) => {
	const metrics = {};
	instances.forEach( elem => {
		const cpu = '--', memory = '--', storage = {db:'--', files:'--'};
		metrics[elem.machine_name] = {cpu, memory, storage};
		listen_machine({'machine_name':elem.machine_name});
	});
	return metrics;
	
}