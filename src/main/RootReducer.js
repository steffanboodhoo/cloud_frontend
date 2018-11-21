import { combineReducers } from 'redux';

// import InstanceReq from '../ducks/InstanceRequest/Reducer.js';
import User from '../ducks/User/Reducer.js';
import App from '../ducks/App/Reducer.js';
// import Payment from '../ducks/Payment/Reducer.js';
import Image from '../ducks/Image/Reducer.js';
import Socket from '../ducks/Socket/Reducer.js';

const RootReducer = combineReducers({
	Image,
	// InstanceReq,
	User,
	// Payment,
	Socket,
	App
});

export default RootReducer;