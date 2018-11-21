import {types} from './Actions';
import {Map} from 'immutable';

const initial_state = Map({
    images:[],
    selected_image_name:'',
    selected_instance_type:''
})

export default (state = initial_state, action) => {
    switch(action.type){
    case(types.RECIEVE_IMAGES):{
        return state.setIn(['images'], action.payload.images);
    }
    case(types.SELECT_IMAGE):{
        state = state.setIn(['selected_image_name'],action.payload.image_name);
        return state.setIn(['selected_instance_type'],action.payload.instance_type);
    }
    default:
        return state;
    }
}