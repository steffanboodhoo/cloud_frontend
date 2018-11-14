import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Console from './Console';
import * as socket_actions from '../ducks/Socket/Actions';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { update_styles} from './styles';

class Update extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			git_user:this.props.user.getIn(['user_name']),
			actions:[
				{'title':'Update Etender', 'desc':'Use git to pull any updates onto the etender VMs','package':'git','type':'start'},
				{'title':'Update Ubuntu Software', 'desc':'Use apt to pull any updates onto ALL VMs','package':'apt','type':'update'},
				{'title':'Install Git', 'desc':'Use apt to install Git onto ALL VMs','package':'apt','type':'git'},
			]
		};
		this.state.filtered_actions = this.state.actions;
	}
	render(){
		const {classes} = this.props;
		return(
			<div>					
				<Console/>
				<div className={classes.row_container}>
					<Paper className={classes.paper} elevation={4}>
						<TextField fullWidth={true} label='username' type='text' value={this.state.git_user}margin="normal"/>
						<TextField fullWidth={true} label='password' type='text' margin="normal"/>					
					</Paper>
					<Paper className={classes.paper} elevation={4}>
						<h3>Operations</h3>
						<TextField fullWidth={true} onChange={this.handle_change} label='search' type='text' margin="normal"/>
						{this.state.filtered_actions.map((el,i) => {
							return (
								<div key={i}>
									<p>{el.title}</p>
									<button onClick={(ev)=>{this.handle_test(el);}}> Start</button>
									<button onClick={(ev)=>{this.handle_test(el);}}> Stop </button>
								</div>
							);
						})}
											
					</Paper>
				</div>
			</div>
		);
	}
	handle_change = (ev) => {
		const filtered = this.state.actions.filter( el => {
			return el.title.toLowerCase().includes(ev.target.value);
		});
		this.setState({filtered_actions:filtered});
	}
	handle_test = (el) => {
		console.log('yello');
		console.log(el.title);
	}
	handle_start = () =>{
		this.props.socket.reset_messages();
		this.props.socket.start_update({username:'sboodho',password:'hellokitty'});
	}
	handle_stop = () =>{this.props.socket.start_stop()};

}

const mapStateToProps = (state) => {return{user:state.User};};
const mapActionsToProps = (dispatch) => {
	return {socket:bindActionCreators(socket_actions,dispatch)};
};

export default connect(mapStateToProps, mapActionsToProps)(withStyles(update_styles)(Update));