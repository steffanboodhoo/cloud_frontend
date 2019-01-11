import Axios from 'axios';

import {listen_machine}  from '../Socket/Actions';

const RECIEVE_INSTANCES = 'INSTANCE/RECIEVE_INSTANCES';
const INIT_METRICS = 'INSTANCE/INIT_METRICS';
export const RECIEVE_METRIC = 'INSTANCE/RECIEVE_METRIC';
export const types = {RECIEVE_INSTANCES, RECIEVE_METRIC, INIT_METRICS};

export const get_instances = (filters={}, fields=[]) => {
	const params = {fields, filters};
	return dispatch => {
		Axios.post('http://localhost:9000/instance/select/open', params).then( resp => {
			const metrics = init_metric(resp.data);
			dispatch({
				type: INIT_METRICS,
				payload: metrics
			})	
			dispatch({
				type: RECIEVE_INSTANCES,
				payload: {instances:resp.data}
			});
			
		})
	}
}

const init_metric = (instances) => {
	const metrics = {};
	instances.forEach( elem => {
		const cpu = '--', memory = '--', storage = {db:'--', files:'--'};
		metrics[elem.machine_name] = {cpu, memory, storage};
		listen_machine({'machine_name':elem.machine_name});
	});
	return metrics;
	
}