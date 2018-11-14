import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as socket_actions from '../ducks/Socket/Actions';
import * as socket from '../ducks/Socket/Selectors';
import { withStyles } from '@material-ui/core/styles';
import { update_styles} from './styles';
class Console extends Component{
	
	constructor(props){
		super(props);
	}

	render(){
		const {classes} = this.props;
		return(
			<div className={classes.console}>
				{socket.getMessages(this.props).map( (el,i) => {
					return (<p className={classes.console_text} key={i}>{el}</p>);
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => {return{socket:state.Socket}};
const mapActionsToProps = (dispatch) => {return {socket_actions:socket_actions}};
export default connect(mapStateToProps, mapActionsToProps)(withStyles(update_styles)(Console));
