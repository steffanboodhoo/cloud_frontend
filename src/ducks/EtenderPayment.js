// import { RECIEVE_ETENDER_PAYMENTS, GET_ETENDER_PAYMENTS } from './actions.js';
import { RECIEVE_ETENDER_PAYMENTS, GET_ETENDER_PAYMENTS } from '../Actions/actions';

const initialState = {
	etender_payments: []
};

export default function etenderPayments(state = initialState, action){
	switch(action.type){
	case RECIEVE_ETENDER_PAYMENTS: {
		let new_state = {...state,etender_payments:action.payload.items};
		return new_state;
	}
	default:{
		return state;
	}
	}
}