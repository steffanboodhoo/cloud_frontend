import {types} from './Actions';
import {Map} from 'immutable';
import Cookies from 'js-cookie';
let initialState = (() => {
	let state = Cookies.get('app');
	if(state == undefined)
		state = { 
			logged_in:false,
			user:null,
			user_type:null
		}
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
	default:
		return state;
	}
}