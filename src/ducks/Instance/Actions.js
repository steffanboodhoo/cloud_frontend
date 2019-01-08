import Axios from 'axios';

import {listen_machine}  from '../Socket/Actions';

const RECIEVE_INSTANCES = 'INSTANCE/RECIEVE_INSTANCES';
const INIT_METRICS = 'INSTANCE/INIT_METRICS';
export const RECIEVE_METRIC = 'INSTANCE/RECIEVE_METRIC';
export const types = {RECIEVE_INSTANCES, RECIEVE_METRIC};

export const get_instances = (filters={}, fields=[]) => {
	const params = {fields, filters};
	return dispatch => {
		Axios.post('http://localhost:9000/instance/select/open', params).then( resp => {
			// console.log(resp); 
			dispatch({
				type: RECIEVE_INSTANCES,
				payload: {instances:resp.data}
			});
			const metrics = init_metric(resp.data);
			console.log(metrics)
		})
	}
}

const init_metric = (instances) => {
	const metrics = {};
	instances.forEach( elem => {
		const cpu = '--', ram = '--', disk = '--';
		metrics[elem.machine_name] = {cpu, ram, disk};
		listen_machine({'machine-name':elem.machine_name});
	});
	return metrics;
	
}