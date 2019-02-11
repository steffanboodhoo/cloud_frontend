import {Map} from 'immutable';
import {types} from './Actions';

const initial_state = Map({
    status:'',
    name:'',
    message:''
})

const RequestStatus = (state = initial_state, action) => {
    switch(action.type){
    case(types.UPDATE_REQUEST_STATUS):{
        console.log(action.payload);
        return Map(action.payload)
    }
    case(types.UPDATE_REQUEST_MESSAGE):{
        return state.updateIn(['message'], action.payload.message);
    }
    default:
        return state;
    }
}
export default RequestStatus;