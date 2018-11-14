import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as UserActions from '../ducks/User/Actions.js';

import classNames from 'classnames';
import Form from '../common/Form';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {login_styles} from './styles.js';
// import Animated from '../common/AnimatedSeg';
class AdminLogin extends Component{
	constructor(props){
		super(props);
		console.log(this.props);
		this.state = {
			'user_type':'employee',
			'resp_err_message':'nothing yet',
			'err_visibility':true
		};
	}

	render(){
		const { classes } = this.props;
		// console.log(this.props.app.user.err);
		return(
			<div>
				<div className={classes.container}>
					<Paper className={classes.paper}>
						<h3>Admin Console</h3>
					</Paper>
					<Paper className={classes.paper} elevation={4}>
						<Form form={this.props.app.admin_form} submit={this.handleSubmit}/>
					</Paper>
					<Paper className={classes.paper} elevation={6}>
						<Typography><Link to='/register'>Create New Account</Link></Typography>
					</Paper>
					<Paper className={classNames(classes.paper, classes.error, {[classes.error_visibility]:!this.props.app.user.err})} elevation={8}>
						<p>Error:<br/>
							{this.props.app.user.message}
						</p>
					</Paper>
				</div>
			</div>
		);
	}
	

	handleSubmit = (data)=>{
		console.log(data);
		this.props.user_actions.authenticate(data, 'admin');
	};
	handleChange = (ev) =>{
		console.log(ev.target.name);
		this.setState({[ev.target.name]:ev.target.value});
	}
}


const mapStateToProps = (state) =>{
	return {app:state.App,user:state.User};
};
const mapActionsToProps = (dispatch) =>{
	return {user_actions:bindActionCreators(UserActions,dispatch)};
};

AdminLogin.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(withStyles(login_styles)(AdminLogin));