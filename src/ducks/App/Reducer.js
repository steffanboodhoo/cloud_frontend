import {types} from './Actions';
import {Map} from 'immutable';
import Cookies from 'js-cookie';
let initialState = (() => {
	let state = Cookies.getJSON('app');
	console.log(state)
	if(state == undefined)
		state = { 
			logged_in:false,
			user:null,
			user_type:null
		}
	state.request_status = 'NONE';
	state.request_message = '';
	return Map(state);
})();

export default function (state = initialState, action){
	switch(action.type){
	case(types.LOG_IN):{
		return Map(action.payload.app_state);
	}
	case(types.LOG_OUT):{
		let state = {logged_in:false, user:null, user_type:null}
		return Map(state);
	}
	case(types.)
	default:
		return state;
	}
}