import Axios from "axios";

const RECIEVE_TEMPLATES = 'TEMPLATE/RECIEVE_IMAGES';
const SELECT_TEMPLATE = 'TEMPLATE/SELECT_TEMPLATE';
export const types = {RECIEVE_TEMPLATES, SELECT_TEMPLATE};

export const get_templates = () => {
    return dispatch => {
        Axios.post('http://localhost:8000/template/select/open',{}).then( resp => {
            dispatch(recieve_templates(resp.data));
        })
    }
}

export const recieve_templates = (templates) => {
    return {
        type:RECIEVE_TEMPLATES,
        payload:{'templates':templates}
    }
}

export const select_template = (template_id) => {
    return {
        type:SELECT_TEMPLATE,
        payload:{template_id}
    };
};