import io from 'socket.io-client';
const socket = io('http://'+window.location.hostname+':9000');
console.log('socket created');
const START_UPDATE = 'socket/SEND_START_UPDATE';
const STOP_UPDATE = 'socket/SEND_STOP_UPDATE';
const NEW_MESSAGE = 'socket/NEW_MESSAGE';
const RESET_MESSAGES = 'socket/RESET_MESSAGES';
export const types = {STOP_UPDATE, START_UPDATE, NEW_MESSAGE, RESET_MESSAGES};

//must be called before anything else
export function init(dispatch){
	socket.on( 'message', (event) => {
		console.log(event);
		return dispatch(
			{
				type: NEW_MESSAGE,
				payload: event
			}
		);
	});
}

export function test_socket(){
	console.log('test_socket')
	socket.emit('git',{'type':'test'});
}

export function start_update(credentials){
	socket.emit('git',{'type':'start','credentials':credentials});
	return{
		type:START_UPDATE
	};
}

export function stop_update(){
	socket.emit('git',{'type':'stop_update'});
	return{
		type:STOP_UPDATE
	};
}

export function reset_messages(){
	return {
		type:RESET_MESSAGES 
	};
}