import {Map} from 'immutable';
import {types} from './Actions';

const initial_state = Map({
	payments:[]
});

export default  (state = initial_state, action) => {
	switch(action.type){
	case(types.RECIEVE_PAYMENTS):{
		return state.setIn(['payments'], action.payload.payments);
	}
	default:
		return state;
	}
}
