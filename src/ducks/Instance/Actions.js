import axios from 'axios';
const SERVER = 'http://localhost:9000';
axios.defaults.withCredentials = true;
//INSTANCE REQUEST
const CREATE_INSTANCE_REQUEST = 'INSTANCE/CREATE_INSTANCE_REQUEST';
const GET_INSTANCE_REQUEST = 'INSTANCE/GET_INSTANCE_REQUEST';
const RECIEVE_INSTANCES = 'INSTANCE/RECIEVE_INSTANCES';
export const types = {CREATE_INSTANCE_REQUEST, GET_INSTANCE_REQUEST, RECIEVE_INSTANCES};

export function createInstanceRequest(data){
	return dispatch => {
		axios.post(SERVER+'/request/initiate', data)
			.then( resp => {
				console.log(data);
				// dispatch(updateHTTPRequestStatus(resp));
			});
	};
}

export function getInstanceRequest(data){
	return dispatch => {
		axios.post(SERVER+'/general/instance/GET', data)
			.then( resp => {
				dispatch(recieveInstances(resp.data));
			});
	};
}
export function recieveInstances(data){
	return {
		type:types.RECIEVE_INSTANCES,
		payload:{
			data:data
		}
	};
}
export const CHANGE_INSTANCE = 'CHANGE_INSTANCE';
export function change_instance(instance_id){
	return {
		type:CHANGE_INSTANCE,
		payload:{
			instance_id:instance_id
		}
	};
}