export const getMessages = ({socket}) => {
	return socket.getIn(['messages']);
};