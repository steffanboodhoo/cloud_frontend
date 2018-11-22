import {Map} from 'immutable';
import {types} from './Actions';

const initial_state = Map({
    message:'',
    http_status_code:'',
    stage:''
})

const UserRequest = (state = initial_state, action) => {
    switch(action.type){
    case(types.SET_MESSAGE):{
        state = state.setIn(['message'], action.payload.message);
        return state.setIn(['http_status_code'], action.payload.http_status_code);
    }
    case(types.SET_REQUEST_STAGE):{
        return state.setIn(['stage'], action.payload.stage);
    }
    default:
        return state;
    }
}