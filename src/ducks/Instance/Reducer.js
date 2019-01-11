import {Map} from 'immutable';
import {types} from './Actions';
const initial_state = Map({
	instances:[],
	metrics:{}
})

export default (state = initial_state, action) => {
	switch(action.type){
	case(types.RECIEVE_INSTANCES):{
		return state.setIn(['instances'], action.payload.instances);
	}
	case(types.INIT_METRICS):{
		state =  state.setIn(['metrics'],Map(action.payload));
		console.log(state)
		return state;
	}
	case(types.RECIEVE_METRIC):{
		console.log(state);
		console.log(action.payload.machine_name)
		return state.setIn(['metrics', action.payload.machine_name], action.payload.data)
	}
	default:
		return state;
	}
}