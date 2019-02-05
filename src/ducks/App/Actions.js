import axios from 'axios';
import Cookies from 'js-cookie';
const SERVER = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const LOG_IN = 'APP/LOG_IN';
const LOG_OUT = 'APP/LOG_OUT';
export const types = {LOG_IN, LOG_OUT};

//Can either be 'customer' or 'admin
export const log_in = (credentials, user_type) => {
	return dispatch => {
		axios.post(SERVER+'/authenticate/'+user_type, credentials).then( resp => {
			console.log(resp.data)
			if( resp.data.status == 'success'){
				let app_state = {logged_in:true, user:user, user_type:user_type}
				Cookies.set('app', app_state)
				return {
					type:LOG_IN,
					payload:{app_state}
				}
			}
		})
	}
}

export const log_out = () => {
	return dispatch => {
		axios.post(SERVER+'/logout').then( resp => {
			console.log(resp.data)

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