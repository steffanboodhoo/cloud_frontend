import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as socket_actions from '../ducks/Socket/Actions';
import * as socket from '../ducks/Socket/Selectors';
import './styles.css';
class Console extends Component{
	
	constructor(props){
		super(props);
	}

	render(){
		const {classes} = this.props;
		return(
			<div id='console' className='console'>
				{socket.getMessages(this.props).map( (el,i) => {
					return (<p className='console_text' key={i}>{el}</p>);
				})}
			</div>
		);
	}

	componentDidUpdate(){
		const elem = document.getElementById('console')
		elem.scrollTop = elem.scrollHeight;
    }
}

const mapStateToProps = (state) => {return{socket:state.Socket}};
const mapActionsToProps = (dispatch) => {return {socket_actions:socket_actions}};
export default connect(mapStateToProps, mapActionsToProps)(Console);
