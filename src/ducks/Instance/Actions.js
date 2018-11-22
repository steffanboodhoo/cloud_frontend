import Axios from 'axios';

const RECIEVE_INSTANCES = 'INSTANCE/RECIEVE_INSTANCES';
export const types = {RECIEVE_INSTANCES};

export const create_instance = (params) => {
	Axios.post('', params).then( resp => {
		console.log(resp);
		// dispatch() do I have any state to update
	})
}