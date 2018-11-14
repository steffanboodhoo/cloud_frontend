import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../ducks/Payment/Actions';
import Form from '../common/Form';

class Payment extends Component{

	render(){
		return(
			<Form form={this.props.payment.form} submit={this.submit} />
		);
	}

	submit = (data) => {
		console.log(data);
		this.props.actions.pay(data);
	}
}

const mapStateToProps = (state) =>{
	return {payment:state.Payment};
};
const mapActionsToProps = (dispatch) =>{
	return {actions:bindActionCreators(Actions,dispatch)};
};

export default connect(mapStateToProps, mapActionsToProps)(Payment);