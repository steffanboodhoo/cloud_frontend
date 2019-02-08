import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as app_actions from '../ducks/App/Actions';


import CustomerHome from '../_cust/Home.js';
import CustomerLogin from '../_cust/Login.js';
import AdminHome from '../_admin/Home';
import AdminLogin from '../_admin/Login';

const CustomerRoute = ({ component:Component, app, ...props }) => {
	return (
		<Route {...props} render={(props) => {
			return (app.getIn(['logged_in']) == true && app.getIn(['user_type']) == 'customer') ?
				<Component {...props} /> : <Redirect to='/customerLogin' />
		}} />

	)
}
const CustomerDefault = ({ component:Component, app, ...props }) => {
	return (
		<Route {...props} render={(props) => {
			return (app.getIn(['logged_in']) == true && app.getIn(['user_type']) == 'customer') ?
				<Redirect to='/home' /> : <Component {...props} /> 
		}} />

	)
}

const AdminRoute = ({ component:Component, app, ...props }) => {
	return (
		<Route {...props} render={(props) => {
			return (app.getIn(['logged_in']) == true && app.getIn(['user_type']) == 'admin') ?
				<Component {...props} /> : <Redirect to='/adminLogin' />
		}} />

	)
}
const AdminDefault = ({ component:Component, app, ...props }) => {
	return (
		<Route {...props} render={(props) => {
			return (app.getIn(['logged_in']) == true && app.getIn(['user_type']) == 'admin') ?
				<Redirect to='/admin' /> : <Component {...props} /> 
		}} />

	)
}



class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact={true} path='/' render = { () => {
						return (this.props.app.getIn(['user_type']) == 'admin') ?
							(<Redirect to={'/admin'}/>) :(<Redirect to={'/home'}/>)}
					} />
					<CustomerDefault path='/customerLogin' app={this.props.app} component={CustomerLogin}/>
					<CustomerRoute path='/home' app={this.props.app} component={CustomerHome} />

					<AdminRoute path='/admin' app={this.props.app} component={AdminHome}/>
					<AdminDefault path='/adminLogin' app={this.props.app} component={AdminLogin}/>
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => {
	return { app: state.App };
};
const mapActionsToProps = (dispatch) => {
	return { app_actions: bindActionCreators(app_actions, dispatch) };
};
export default connect(mapStateToProps, mapActionsToProps)(App);