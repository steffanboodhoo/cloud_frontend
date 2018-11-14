import {types, status} from './Actions';
import {Map} from 'immutable';
import Cookies from 'js-cookie';

const initial_state = () => {
	const authenticated = Cookies.get('authenticated') != undefined ?true:false;
	return Map({
		authenticated : authenticated,
		auth_status: status.AUTH_NONE,
		user_type: Cookies.get('user_type'),
		user_name : Cookies.get('user_name'),
		auth_error_message: null,
		user_pass:null
	});
};

export default function (state = initial_state(), action){
	switch(action.type){
	case(types.AUTHENTICATE):{
		state.setIn(['user_name'], action.payload.user_name);
		state.setIn(['user_type'], action.payload.user_type);
		return state.setIn(['authenticated'], true);
	}
	case(types.AUTHENTICATE_STATUS):{
		return state.setIn(['auth_status'], action.payload.status);
	}
	case(types.LOGOUT):{
		return state.setIn(['authenticated'], false);
	}
	default:
		return state;
	}
}