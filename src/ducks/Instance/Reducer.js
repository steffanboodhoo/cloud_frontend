import {types} from './Actions';
const initiate = {
	instances:[]
};

export default function ManageInstances(state=initiate, action){
	switch(action.type){
	case types.RECIEVE_INSTANCES:
		return {...state, instances:action.payload.data};
		break;
	default:
		return {...state};
	}
}