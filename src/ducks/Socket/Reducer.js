import {types} from './Actions';
import {fromJS, List} from 'immutable';
const initial_state = fromJS({
	'messages':[]
});

export default function (state = initial_state, action ){
	switch(action.type){
	case types.NEW_MESSAGE:{
		return state.updateIn(['messages'], arr => arr.push(action.payload));
	}
	case types.RESET_MESSAGES:{
		return state.setIn(['messages'], List([]));
	}
	default:
		return state;
	}
}