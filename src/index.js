import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './main/RootReducer';

// import CssBaseline from '@material-ui/core/CssBaseline';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {init} from './ducks/Socket/Actions';
import App from './main/App';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
const store = createStore(
	rootReducer,	
	applyMiddleware(
		thunkMiddleware // lets us dispatch() functions
	)
);

init(store.dispatch);
render(	
	<Provider store={store}>	
		<App/>
	</Provider>, document.getElementById('root'));