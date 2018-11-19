//Main Imports -- functionality
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as UserActions from '../ducks/User/Actions.js';

//Container Imports
// import RequestInstance from '../_request_instance/RequestInstance';
// import Payment from '../_payment/Payment';
// import ManageInstances from '../_manage_instance/ManageInstances';

class CustomerHome extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<div id="introduction" className="section scrollspy">
					<ul className="tabs  z-depth-1">
						<li className="tab"><a className="active" href="#test16">Test 1</a></li>
						<li className="tab"><a href="#test17">Another Tab</a></li>
						<li className="tab"><a href="#test18">Test 3</a></li>
						<li className="tab"><a href="#test19">Tes222</a></li>
					</ul>

					<div id="test16" className="col s12"><p> 1</p></div>
					<div id="test17" className="col s12"><p>Another Tab content</p></div>
					<div id="test18" className="col s12"><p>Test 3</p></div>
					<div id="test19" className="col s12"><p>Test s4ee</p></div>
				</div>
			</div>
		);
	}

	componentDidMount(){
		// $('.tabs').tabs();
		var elems = document.querySelectorAll('.tabs');
		var instance = M.Tabs.init(elems, {});
	}
}

export default CustomerHome;