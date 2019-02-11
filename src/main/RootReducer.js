import { combineReducers } from 'redux';

import App from '../ducks/App/Reducer.js';
import Payment from '../ducks/Payment/Reducer.js';
import Template from '../ducks/Template/Reducer.js';
import Instance from '../ducks/Instance/Reducer.js';
import Socket from '../ducks/Socket/Reducer.js';
import Task from '../ducks/Task/Reducer.js';
import RequestStatus from '../ducks/RequestStatus/Reducer';

const RootReducer = combineReducers({
	Template,
	Instance,
	Payment,
	Socket,
	Task,
	RequestStatus,
	App
});

export default RootReducer;