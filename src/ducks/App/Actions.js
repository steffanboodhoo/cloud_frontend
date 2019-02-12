import axios from 'axios';
import Cookies from 'js-cookie';
import { REQUEST_STATUS, REQUEST_NAME, update_request_status} from '../RequestStatus/Actions';

const SERVER = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const LOG_IN = 'APP/LOG_IN';
const LOG_OUT = 'APP/LOG_OUT';
export const types = {LOG_IN, LOG_OUT};

//Can either be 'customer' or 'admin
export const log_in = (credentials, user_type, push) => {
	console.log(history)
	//REQUEST STATUS CHANGES
	const log_in_status_pending = (dispatch)=>{ dispatch(update_request_status(REQUEST_STATUS.PENDING, REQUEST_NAME.LOG_IN));}
	const log_in_status_success = (dispatch)=>{ dispatch(update_request_status(REQUEST_STATUS.SUCCESS, REQUEST_NAME.LOG_IN));}
	const log_in_status_fail = (dispatch)=>{ dispatch(update_request_status(REQUEST_STATUS.FAIL, REQUEST_NAME.LOG_IN));}
	const log_in_status_error = (dispatch)=>{ dispatch(update_request_status(REQUEST_STATUS.ERROR, REQUEST_NAME.LOG_IN));}
	
	return dispatch => {
		//set app state's request to pending then send post 
		log_in_status_pending(dispatch);
		axios.post(SERVER+'/authenticate/'+user_type, credentials)
		//capture successful response 2xx
		.then( resp => {
			if( resp.data.status == 'success'){
				log_in_status_success(dispatch)
				let app_state = {logged_in:true, user:resp.data.user, user_type:user_type}
				Cookies.set('app', app_state)
				dispatch({
					type:LOG_IN,
					payload:{app_state}
				})
				push( (user_type=='customer')? '/home':'/admin' )
					
				// history.push
			}
		//handle any other response code than 2xx
		}).catch( error => {
			// The request was made and the server responded with a status code
			if(error.response){
				log_in_status_fail(dispatch)
			//everything else
			}else{
				log_in_status_error(dispatch)
			}
			
		})
	}
	// this.
}


export const log_out = (user_type, push) => {
	return dispatch => {
		axios.get(SERVER+'/logout').then( resp => {
			Cookies.remove('app');
			dispatch ({
				type: LOG_OUT
			})
			push( (user_type=='customer')? '/customerLogin':'/adminLogin' )
		})
	}
}