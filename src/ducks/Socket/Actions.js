import io from 'socket.io-client';
const socket = io('http://'+window.location.hostname+':9000/task');
// console.log(socket.Manager())
// console.log(io.timeout(40000))
// console.log(io.timeout())
console.log('socket created');
const START_TASK = 'socket/SEND_START_TASK';
const NEW_MESSAGE = 'socket/NEW_MESSAGE';
const RESET_MESSAGES = 'socket/RESET_MESSAGES';
export const types = {START_TASK, NEW_MESSAGE, RESET_MESSAGES};

//must be called before anything else
export function init(dispatch){
	socket.on( 'ansible-message', (event) => {
		
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
}

export function send_instance_task(args){
	console.log(args)
	socket.emit('INSTANCE', args);
	return{
		type:START_TASK
	}
}

export function send_group_task(args){
	socket.emit('GROUP', args)
	return{
		type:START_TASK
	}
}

// export function start_update(credentials){
// 	socket.emit('git',{'type':'start','credentials':credentials});
// 	return{
// 		type:START_UPDATE
// 	};
// }

// export function stop_update(){
// 	socket.emit('git',{'type':'stop_update'});
// 	return{
// 		type:STOP_UPDATE
// 	};
// }

export function reset_messages(){
	return {
		type:RESET_MESSAGES 
	};
}

// msg": "pay_country\tpay_state\tpay_zipcode\nNULL\tNULL\ttestr\nUS\tNY\t000000\nUS\tNY\t000000\nCA\tAB\t12345\nTT\tNULL\tNULL"

// "msg": "pay_country\tpay_state\tpay_zipcode\nNULL\tNULL\ttestr\nUS\tNY\t000000\nUS\tNY\t000000\nCA\tAB\t12345\nTT\tNULL\tNULL"