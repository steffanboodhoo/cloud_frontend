import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../ducks/Instance/Actions';
// import * as Actions from '../ducks/Payment/Actions';
import InstanceItem from './InstanceItem';

class ManageInstances extends Component{
	
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<div>{this.props.instances.map( (obj, key) => {
				return <InstanceItem switch={this.props.switch} instance_change={this.handle_instance_change} {...obj} key={key}/>;
			})}</div>
		);
		
	}
	componentDidMount(){		
		if(this.props.instances.length == 0)
			this.props.actions.getInstanceRequest({});
	}

	handle_instance_change = (instance_id) => {
		this.props.actions.change_instance(instance_id);
	};
}

const mapStateToProps = (state) => {
	return {instances:state.Instance.instances};
};
const mapActionsToProps = (dispatch) => {
	return {actions:bindActionCreators(Actions,dispatch)};
};
export default connect(mapStateToProps, mapActionsToProps)(ManageInstances);