import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../ducks/User/Actions.js';

import Form from '../common/Form.js';
import {Link} from 'react-router-dom';
// import Animated from '../components/AnimatedSeg';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	container:{
		display:'flex',
		'flex-direction':'column',
		'align-items':'center'
	},
	paper_container:{
		width:'40vw',
		'margin-top':'2%',
	},
	paper: {
		...theme.mixins.gutters(),
		padding:'5%'
		
	},
	error:{
		'background-color':'#FA4646',
		'color':'#7D0606',
		'font-weight':'bold'
	},
	error_visibility:{
		visibility:'hidden'
	},
	content:{
		'align-content':'center',
		'align-text':'center'
	}
	
});

class Register extends Component{
	
	constructor(props){
		super(props);
		console.log(this.props)
	}

	render(){
		const {classes} = this.props;
		return(
			<div id='form' className={classes.container}>
				<div className={classes.paper_container}>
					<Paper className={classes.paper}>
						<Form submit={this.submit} form={this.props.register.form}/>
					</Paper>
				</div>
				<div className={classes.paper_container}>	
					<Paper className={classNames(classes.paper, classes.error, {[classes.error_visibility]:!this.props.app.user.err})} elevation={8}>
						<p>Error:<br/>
							{this.props.app.user.message}
						</p>
					</Paper>
				</div>
			</div>
		);
	}
	
	submit = (data) =>{
		console.log(data);
		delete(data['confirm_password'])
		this.props.actions.createNewUser(data);
	}
}

const mapStateToProps = (state)=>{
	console.log(state.Register);
	return {register:state.Register, app:state.App};
};
const mapActionsToProps = (dispatch)=>{
	return {actions:bindActionCreators(Actions,dispatch)};
};

Register.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Register));