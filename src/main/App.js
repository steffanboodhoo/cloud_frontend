import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as app_actions from '../ducks/App/Actions';


import CustomerHome from '../_cust/Home.js';
import CustomerLogin from '../_cust/Login.js';


const CustomerRoute = ({ component:Component, app, ...props }) => {
	return (
		<Route {...props} render={(props) => {
			return (app.getIn(['logged_in']) == true && app.getIn(['user_type']) == 'customer') ?
				<Component {...props} /> : <Redirect to='/customer/login' />
		}} />

	)
}
const CustomerDefault = ({ component:Component, app, ...props }) => {
	return (
		<Route {...props} render={(props) => {
			return (app.getIn(['logged_in']) == true && app.getIn(['user_type']) == 'customer') ?
				<Redirect to='/customer/home' /> : <Component {...props} /> 
		}} />

	)
}

const AdminRoute = ({ component:Component, app, ...props }) => {
	return (
		<Route {...props} render={(props) => {
			return (app.getIn(['logged_in']) == true && app.getIn(['user_type']) == 'admin') ?
				<Component {...props} /> : <Redirect to='/admin/login' />
		}} />

	)
}
const AdminDefault = ({ component:Component, app, ...props }) => {
	return (
		<Route {...props} render={(props) => {
			return (app.getIn(['logged_in']) == true && app.getIn(['user_type']) == 'admin') ?
				<Redirect to='/admin/home' /> : <Component {...props} /> 
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
					{/* <Route path='/login' component={CustomerLogin} /> */}
					<Route exact={true} path='/' render = {()=>(<Redirect to={'/customer/login'}/>)} />
					<CustomerDefault path='/customer/login' app={this.props.app} component={CustomerLogin}/>
					<CustomerRoute path='/customer/home' app={this.props.app} component={CustomerHome} />
					{/* <Route path='/admin' component={ AdminHome } />					 */}
				</div>
			</BrowserRouter>
		);
	}
}

/*
<Route path='/register' component={Register}/>
<Route exact path='/' render = {()=> <Redirect to="/home"/>}/>
<PrivateRoute authenticated={this.props.user.getIn(['authenticated']) }  path="/home" component={ CustomerHome } />
<PublicRoute authenticated={this.props.user.getIn(['authenticated']) }  path="/login" component={ CustomerLogin } />

<Route path="/adminlogin" render={() =>{
	return (this.props.user.getIn(['authenticated'])==false)?(<AdminLogin/>):(<Redirect to='/adminhome'/>);
}}/>
<Route path="/adminhome" render={() => {
	return (this.props.user.getIn(['authenticated'])==true)?(<AdminHome/>):(<Redirect to='/adminlogin'/>);
}}/>
*/
const mapStateToProps = (state) => {
	return { app: state.App };
};
const mapActionsToProps = (dispatch) => {
	return { app_actions: bindActionCreators(app_actions, dispatch) };
};
export default connect(mapStateToProps, mapActionsToProps)(App);