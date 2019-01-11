import io from 'socket.io-client';

const sock_tasks = io('http://'+window.location.hostname+':9000/task');
const sock_metric = io('http://'+window.location.hostname+':9000/metric');

const START_TASK = 'socket/SEND_START_TASK';
const NEW_MESSAGE = 'socket/NEW_MESSAGE';
const RESET_MESSAGES = 'socket/RESET_MESSAGES';
import {RECIEVE_METRIC} from '../Instance/Actions';

export const types = {START_TASK, NEW_MESSAGE, RESET_MESSAGES};

//must be called before anything else
export function init(dispatch){
	sock_tasks.on( 'ansible-message', (event) => {
		
		event = String(event);
		event = event.replace(/"/g,'');
		//event = event.replace(/\\n/g,'<br />');
		console.log(String.raw`${event}`);
		return dispatch(
			{
				type: NEW_MESSAGE,
				payload: event
			}
		);
	});

	sock_metric.on( 'machine-metric', (event) => {
		console.log(event)
		const data = JSON.parse(event)
		const machine_name = data.machine_name
		delete data.machine_name
		return dispatch({
			type: RECIEVE_METRIC,
			payload: {machine_name, data}
		})
	})
}

export function send_instance_task(args){
	console.log(args)
	sock_tasks.emit('INSTANCE', args);
	return{
		type:START_TASK
	}
}

export function send_group_task(args){
	sock_tasks.emit('GROUP', args)
	return{
		type:START_TASK
	}
}

export function listen_machine(args){
	sock_metric.emit('listen-machine',args)
}


export function reset_messages(){
	return {
		type:RESET_MESSAGES 
	};
}

// msg": "pay_country\tpay_state\tpay_zipcode\nNULL\tNULL\ttestr\nUS\tNY\t000000\nUS\tNY\t000000\nCA\tAB\t12345\nTT\tNULL\tNULL"

// "msg": "pay_country\tpay_state\tpay_zipcode\nNULL\tNULL\ttestr\nUS\tNY\t000000\nUS\tNY\t000000\nCA\tAB\t12345\nTT\tNULL\tNULL"