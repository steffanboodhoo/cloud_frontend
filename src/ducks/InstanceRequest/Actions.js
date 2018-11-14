import axios from 'axios';
const SERVER = 'http://localhost:9000';
axios.defaults.withCredentials = true;

export const GET_BUNDLES = 'GET_BUNDLES';
export const RECIEVE_BUNDLES = 'RECIEVE_BUNDLES';
export const CREATE_INSTANCE_REQUEST = 'CREATE_INSTANCE_REQUEST';

//BUNDLES
export function getBundles( params ){
	return dispatch => {
		axios.post(SERVER+'/general/bundle/GET', params)
			.then( resp =>{
				dispatch(recieveBundles(resp.data));
			});
	};
}


export function recieveBundles(data){
	return{
		type:RECIEVE_BUNDLES,
		payload:{
			data:data
		}
	};
}
//INSTANCE REQUEST
export function createInstanceRequest(data){
	return dispatch => {
		axios.post(SERVER+'/request/initiate', data)
			.then( resp => {
				console.log(data);
				// dispatch(updateHTTPRequestStatus(resp));
			});
	};
}