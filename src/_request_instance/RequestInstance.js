import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../ducks/InstanceRequest/Actions.js';

import jsPDF from 'jspdf';
import Form from '../common/Form';
import BundleList from './BundleList';

class InstanceReq extends Component{

	constructor(props){
		super(props);
		this.state = {
			bundle_id:-1
		};
	}

	render(){
		return(
			<div>
				<div>
					<BundleList bundles={this.props.instance_req.bundles} selectBundle={this.selectBundle}/>
				</div>
				<div>
					<Form submit={this.submit} form={this.props.instance_req.form}/>
				</div>
			</div>
		);
	}
	componentDidMount(){
		if( this.props.instance_req.bundles.length == 0){
			console.log('loading bundles');
			this.props.actions.getBundles({});
		}
	}

	submit = (data) =>{
		data['bundle_id'] = this.state.bundle_id;
		delete data.eten_admin_password_conf;
		console.log(data);
		this.props.actions.createInstanceRequest(data);
	}
	selectBundle = (id) => {
		this.setState({bundle_id:id});
	}

	pdf(){
		console.log('pdf clicked');
		var doc = new jsPDF();
		var source = window.document.getElementById('doc');
		doc.fromHTML(
			source,
			15,
			15,
			{
				'width':180 
			}
		);
		doc.save('viewerPreferences.pdf');
	}

}

const mapStateToProps=(state)=>{
	return {instance_req:state.InstanceReq};
};
const mapActionsToProps=(dispatch)=>{
	return {actions:bindActionCreators(Actions,dispatch)};
};
export default connect(mapStateToProps,mapActionsToProps)(InstanceReq);