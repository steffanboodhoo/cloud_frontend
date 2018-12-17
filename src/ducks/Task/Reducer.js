import {Map} from 'immutable';
import {types} from './Actions';
const initial_state = Map({
    tasks:[]
});

export default (state = initial_state, action) => {
    switch(action.type){
    case(types.RECIEVE_TASKS):{
        return state.setIn(['tasks'],action.payload.tasks)
    }
    default:
        return state;
    }
}