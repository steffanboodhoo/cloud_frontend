import {Map} from 'immutable';
import {types} from './Actions';
const initial_state = Map({
	instances:[]
})

const Intance = (state = initial_state, action) => {
	switch(action.type){
	case(types.RECIEVE_INSTANCES):{
		return state.setIn(['instances'], action.payload.instances);
	}
	default:
		return state;
	}
}
export default Instance;