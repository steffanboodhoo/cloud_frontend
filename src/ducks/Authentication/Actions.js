import axios from 'axios';
const SERVER = 'http://localhost:8000';
axios.defaults.withCredentials = true;

export const AUTHENTICATE = 'AUTHENTICATE';
export function authenticate(creds){
	return dispatch => {
		axios.post(SERVER+'/authenticate', creds)
			.then( resp => {
				console.log(resp);
				let message = null;
				if(resp.data.status=='failure' && !resp.data.message)
					message = 'Wrong username or password';
				dispatch(authentication_update(resp.data.status, message));
			}).catch( err =>{
				dispatch(authentication_update('failure','unable to reach server, check your connection or contact the admin'));
			});
	};
}
export function authentication_update(status, message=null){
	return {
		type:AUTHENTICATE,
		payload:{
			status:status,
			message:message
		}
	};
}

export function logged_in(){
	return dispatch => {
		axios.get(SERVER+'/logged_in')
			.then( resp => {
				dispatch(authentication_update(resp.data.status));
			});
	};
}

export function logout(){
	console.log('balls');
	return dispatch => {
		axios.get(SERVER+'/logout')
			.then( resp => {
				dispatch(authentication_update('failure'))
			});
	};
}