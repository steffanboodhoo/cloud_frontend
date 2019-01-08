import {Map} from 'immutable';
import {types} from './Actions';
const initial_state = Map({
	instances:[],
	statistics:{}
})

export default (state = initial_state, action) => {
	switch(action.type){
	case(types.RECIEVE_INSTANCES):{
		return state.setIn(['instances'], action.payload.instances);
	}
	case(types.RECIEVE_METRIC):{
		console.log(action.payload);
		return state;
	}
	default:
		return state;
	}
}