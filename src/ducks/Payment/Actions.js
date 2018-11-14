import axios from 'axios';
const SERVER = 'http://localhost:9000';
axios.defaults.withCredentials = true;
//PAYMENT
const POST_PAY = 'POST_PAY';
const POST_PAY_SUCCESS = 'POST_PAY_SUCCESS';
const POST_PAY_FAILURE = 'POST_PAY_FAILURE';
export const types = {POST_PAY, POST_PAY_FAILURE, POST_PAY_SUCCESS};
export function pay(data){
	return dispatch => {
		axios.post(SERVER+'/pay',data)
			.then( resp => {
				console.log(data);
			});
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