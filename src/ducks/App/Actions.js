import axios from 'axios';
import Cookies from 'js-cookie';
const SERVER = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const LOG_IN = 'APP/LOG_IN';
const LOG_OUT = 'APP/LOG_OUT';
const REQUEST_PENDING = 'APP/REQUEST_PENDING';
const REQUEST_FAIL = 'APP/REQUEST_FAIL';
const REQUEST_ERROR = 'APP/REQUEST_ERROR';
const REQUEST_NONE = 'APP/REQUEST_NONE';

export const types = {LOG_IN, LOG_OUT};

//Can either be 'customer' or 'admin
export const log_in = (credentials, user_type) => {
	return dispatch => {
		//set app state's request to pending then send post 
		dispatch({type: REQUEST_PENDING})
		axios.post(SERVER+'/authenticate/'+user_type, credentials)
		//capture successful response 2xx
		.then( resp => {
			if( resp.data.status == 'success'){
				let app_state = {logged_in:true, user:resp.data.user, user_type:user_type}
				Cookies.set('app', app_state)
				return {
					type:LOG_IN,
					payload:{app_state}
				}
			}
		//handle any other response code than 2xx
		}).catch( error => {
			// The request was made and the server responded with a status code
			if(error.response){
				return{ type: REQUEST_FAIL }
			//everything else
			}else{
				return{ type: REQUEST_ERROR }
			}
			
		})
	}
}

export const log_out = () => {
	return dispatch => {
		axios.get(SERVER+'/logout').then( resp => {
			Cookies.remove('app');
			return {
				type: LOG_OUT
			}
		})
	}
}
// export const admin_log_in = (credentials) => {
// 	return dispatch => {
// 		axios.post(SERVER + '/authenticate/customer').then( resp => {
// 			console.log(resp.data)
// 			if( resp.data.status == 'success'){

// 			}
// 		})
// 	}
// }