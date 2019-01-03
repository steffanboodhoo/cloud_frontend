import {types} from './Actions';
import {Map} from 'immutable';

const initial_state = Map({
    templates:[],
    selected_template_id:''
})

export default (state = initial_state, action) => {
    switch(action.type){
    case(types.RECIEVE_TEMPLATES):{
        return state.setIn(['templates'], action.payload.templates);
    }
    case(types.SELECT_TEMPLATE):{
        return state.setIn(['selected_template_id'],action.payload.template_id);
    }
    default:
        return state;
    }
}