import { combineReducers } from 'redux';

import InstanceReq from '../ducks/InstanceRequest/Reducer.js';
import User from '../ducks/User/Reducer.js';
import App from '../ducks/App/Reducer.js';
import Payment from '../ducks/Payment/Reducer.js';
import Instance from '../ducks/Instance/Reducer.js';
import Socket from '../ducks/Socket/Reducer.js';

const RootReducer = combineReducers({
	Instance,
	InstanceReq,
	User,
	Payment,
	Socket,
	App
});

export default RootReducer;