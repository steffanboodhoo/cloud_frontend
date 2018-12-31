import Axios from "axios";

const RECIEVE_IMAGES = 'IMAGE/RECIEVE_IMAGES';
const SELECT_IMAGE = 'IMAGE/SELECT_IMAGE';
export const types = {RECIEVE_IMAGES, SELECT_IMAGE};

export const get_images = () => {
    return dispatch => {
        Axios.post('http://localhost:9000/image/select/open',{}).then( resp => {
            dispatch(recieve_images(resp.data));
        })
    }
}

export const recieve_images = (images) => {
    return {
        type:RECIEVE_IMAGES,
        payload:{'images':images}
    }
}

export const select_image = (image_name, instance_type) => {
    return {
        type:SELECT_IMAGE,
        payload:{image_name, instance_type}
    };
};