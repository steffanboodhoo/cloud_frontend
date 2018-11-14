import axios from 'axios';
import Cookies from 'js-cookie'; 
const SERVER = 'http://localhost:9000';
axios.defaults.withCredentials = true;

const AUTHENTICATE = 'user/AUTHENTICATE';
const AUTHENTICATION_STATUS = 'user/AUTHENTICATE_STATUS';
const LOGOUT = 'user/LOGOUT';
export const types = {AUTHENTICATE, AUTHENTICATION_STATUS, LOGOUT};

const AUTH_SUCCESS = 'AUTH_SUCCESS';
const AUTH_FAILURE = 'AUTH_FAILURE';
const AUTH_PENDING = 'AUTH_PENDING';
const SERVER_FAILURE = 'SERVER_FAILURE';
const AUTH_NONE = 'AUTH_NONE';
export const status = {AUTH_SUCCESS, SERVER_FAILURE, AUTH_FAILURE, AUTH_PENDING, AUTH_NONE};
axios.defaults.withCredentials = true;
// const AUTH_SUCCESS_MESSAGE ='Logged in';
// const AUTH_FAILURE_MESSAGE ='Wrong username or password';
// ,'unable to reach server, check your connection or contact the admin'
export function authenticate(credentials, user_type){
	return dispatch => {
		dispatch(authentication_status(status.AUTH_PENDING));
		const uri = SERVER + '/authenticate/' + user_type;
		axios.post(uri, credentials)
			.then( resp => { 
				console.log(resp);
				if(resp.data.status == 'success')
					dispatch(save_authenticated(credentials, user_type));
				else
					dispatch(authentication_status(status.AUTH_FAILURE));
			}).catch( err =>{
				console.log(err);
				console.log('no response from server');
				dispatch(authentication_status(status.SERVER_FAILURE));
			});
	};
}
 
export const logout = () => {
	Cookies.remove('authenticated');
	return dispatch => {
		axios.get(SERVER+'/logout')
			.then( resp => {
				dispatch({type : types.LOGOUT})
			});
	};
};
const authentication_status = (status) => {
	return {
		type : types.AUTHENTICATION_STATUS,
		status : status
	};
};

const save_authenticated = (credentials, user_type) =>{
	Cookies.set('user_type',user_type);
	Cookies.set('user_name',credentials['username']);
	Cookies.set('authenticated',true);
	return {
		type: types.AUTHENTICATE,
		payload:{
			user_name: credentials['username'],
			user_pass:credentials['password'],
			user_type: user_type
		}

	};
};

