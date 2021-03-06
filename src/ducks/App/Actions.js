import axios from 'axios';
import Cookies from 'js-cookie';
import { REQUEST_STATUS, REQUEST_NAME, update_request_status} from '../RequestStatus/Actions';

const SERVER = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const LOG_IN = 'APP/LOG_IN';
const LOG_OUT = 'APP/LOG_OUT';
export const types = {LOG_IN, LOG_OUT};

const status_pending = (dispatch, name)=>{ dispatch(update_request_status(REQUEST_STATUS.PENDING, name));}
const status_success = (dispatch, name)=>{ dispatch(update_request_status(REQUEST_STATUS.SUCCESS, name));}
const status_fail = (dispatch, name)=>{ dispatch(update_request_status(REQUEST_STATUS.FAIL, name));}
const status_error = (dispatch, name)=>{ dispatch(update_request_status(REQUEST_STATUS.ERROR, name));}

//Can either be 'customer' or 'admin
export const log_in = (credentials, user_type, push) => {
	console.log(history)
	//REQUEST STATUS CHANGES

	
	return dispatch => {
		//set app state's request to pending then send post 
		status_pending(dispatch, REQUEST_NAME.LOG_IN);
		axios.post(SERVER+'/authenticate/'+user_type, credentials)
		//capture successful response 2xx
		.then( resp => {
			console.log(resp)
			if( resp.data.status == 'success'){
				status_success(dispatch, REQUEST_NAME.LOG_IN)
				let app_state = {logged_in:true, user:resp.data.user, user_type:user_type}
				Cookies.set('app', app_state)
				dispatch({
					type:LOG_IN,
					payload:{app_state}
				})
				push( (user_type=='customer')? '/home':'/admin' )
					
				// history.push
			}else{
				console.log(resp)
			}
		//handle any other response code than 2xx
		}).catch( error => {
			// The request was made and the server responded with a status code
			if(error.response){
				status_fail(dispatch, REQUEST_NAME.LOG_IN)
			//everything else
			}else{
				status_error(dispatch, REQUEST_NAME.LOG_IN)
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

export const register  = ( details , push) => {
	return dispatch => {
		status_pending(dispatch, REQUEST_NAME.REGISTER)
		axios.post( SERVER+'/customer/create',details)
		.then( resp => {
			console.log(resp);
			if(resp.data.status == 'success'){
				status_success(dispatch, REQUEST_NAME.REGISTER)
				//do things here
				push('/')
			}else{
				status_fail(dispatch, REQUEST_NAME.REGISTER)
			}
		}).catch( err => {
			if(err.response){
				status_fail(dispatch, REQUEST_NAME.REGISTER)
			}else{
				status_error(dispatch, REQUEST_NAME.REGISTER)
			}
		})
	}
}