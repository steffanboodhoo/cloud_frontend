import {Map} from 'immutable';
import {types} from './Actions';
const initial_state = Map({
	instances:[]
})

export default (state = initial_state, action) => {
	switch(action.type){
	case(types.RECIEVE_INSTANCES):{
		console.log(action.payload.instances)
		return state.setIn(['instances'], action.payload.instances);
	}
	default:
		return state;
	}
}