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

const store = createStore(
	rootReducer,	
	applyMiddleware(
		thunkMiddleware // lets us dispatch() functions
	)
);
/*const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#00b53d', light:'#67ff9c', dark:'#00b53d'
		},
		secondary: {
			main: '#f44336', light:'#ff7961', dark:'#ba000d'
		},
		header:{
			main:'#606060'
		}
	},
});*/
init(store.dispatch);
render(	
	<Provider store={store}>	
		<App/>
	</Provider>, document.getElementById('root'));