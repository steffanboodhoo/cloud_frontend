import Axios from 'axios';

const RECIEVE_INSTANCES = 'INSTANCE/RECIEVE_INSTANCES';
export const types = {RECIEVE_INSTANCES};

export const get_instances = (filters={}, fields=[]) => {
	const params = {fields, filters};
	return dispatch => {
		Axios.post('http://localhost:9000/instance/select/open', params).then( resp => {
			// console.log(resp);
			dispatch({
				type: RECIEVE_INSTANCES,
				payload: {instances:resp.data}
			});
		})
	}
}