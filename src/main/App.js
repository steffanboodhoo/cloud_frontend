import React, {Component} from 'react';

import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UserActions from '../ducks/User/Actions';

// import Register from '../_register/Register.js';
import CustomerHome from '../_cust/Home.js';
import CustomerLogin from '../_cust/Login.js';

// import AdminHome from '../_admin/Home.js';
// import AdminLogin from '../_admin/Login.js';

const PrivateRoute = ({component: Component, authenticated, ...props}) => {
	return (
		<Route {...props}
			render={(props) => authenticated === true ? 
				<Component {...props} />
				:<Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
	);
};

const PublicRoute = ({component: Component, authenticated, ...props}) => {
	return (
		<Route {...props} render={(props) => authenticated === false ? 
			<Component {...props} />
			: <Redirect to='/home' />} />
	);
};

class App extends Component{
	constructor(props){
		super(props);
		/*this.state = {
			authenticated:this.props.app.user.authenticated
		};*/
	}
	
	render(){		
		// console.log(this.props.user.getIn(['authenticated']));
		return(
			<BrowserRouter>
				<div>
					<Route path='/login' component={CustomerLogin}/>				  					
					<Route path='/home' component={ CustomerHome } />					
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
const mapStateToProps=(state)=>{
	return {app:state.App, user:state.User};
};
const mapActionsToProps=(dispatch)=>{
	return {user_actions:bindActionCreators(UserActions,dispatch)};
};
export default connect(mapStateToProps,mapActionsToProps)(App);