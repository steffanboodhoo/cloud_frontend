import React, {Component} from 'react';
import Table from '../components/Table.js';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../Actions/actions.js';
class PaymentTracking extends Component{

	constructor(props){
		super(props);
		console.log(this.props.etender_payments);
	}

	render(){
		return(
			<div>
				<h1 as='h2'>Payment Tracking</h1>
				<Table data={this.props.etender_payments} />
			</div>
		);
	}

	componentDidMount(){
		this.props.actions.getEtenderPayments();
	}

}
const mapStateToProps = (state) => {
	return {etender_payments:state.EtenderPayment.etender_payments};
};
const mapDispatchToProps = (dispatch) => {
	return {actions: bindActionCreators(Actions, dispatch)};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PaymentTracking);