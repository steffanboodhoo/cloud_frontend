//Main Imports -- functionality
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as UserActions from '../ducks/User/Actions.js';
import CreateInstance from '../_create_instance/CreateInstance';
import ViewPayments from '../_tracking/_payments/ViewPayments';
import Operations from '../_operations/Operations';
import './home.css';

class CustomerHome extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<nav>
					<div className="nav-wrapper">
					<a href="#" className="brand-logo center">Automation</a>
					<ul><li>
					<a href="#" data-target="slide-out" className="left" id="sidenav_cust_trigger"><i className="material-icons">menu</i></a>
					</li>
					</ul>
					</div>
				</nav>
				

				<ul id="slide-out" className="sidenav">
					<li>
						<div className="user-view">
							<div className="background">
								<img src="https://www.raydarhealth.com/wp-content/uploads/2015/07/cloud-tech-computers-e1443730291360-1.png"/>
							</div>
							<a href="#name"><span className="white-text name">Steffan Boodhoo</span></a>
							<a href="#email"><span className="white-text email">boodhoo100@gmail.com</span></a>
						</div>
					</li>
					<li><a href="#!" className="waves-effect"><i className="material-icons">cloud</i>My Instances</a></li>
					<li><a href="#!" className="waves-effect"><i className="material-icons">add_circle</i>Create Instance</a></li>
					<li><div className="divider"></div></li>
					<li><a className="subheader">Account</a></li>
					<li><a className="waves-effect" href="#!">Account</a></li>
					<li><a className="waves-effect" href="#!">Billing</a></li>
				</ul>

				<div>
					<CreateInstance/>
					{/* <Operations/> */}
				</div>
			</div>
			
		);
	}
// 	<div>
// 	<div id="introduction" className="section scrollspy">
// 		<ul className="tabs  z-depth-1">
// 			<li className="tab"><a className="active" href="#test16">Test 1</a></li>
// 			<li className="tab"><a href="#test17">Another Tab</a></li>
// 			<li className="tab"><a href="#test18">Test 3</a></li>
// 			<li className="tab"><a href="#test19">Tes222</a></li>
// 		</ul>

// 		<div id="test16" className="col s12"><p> 1</p></div>
// 		<div id="test17" className="col s12"><p>Another Tab content</p></div>
// 		<div id="test18" className="col s12"><p>Test 3</p></div>
// 		<div id="test19" className="col s12"><p>Test s4ee</p></div>
// 	</div>
// </div>
	componentDidMount(){
		// document.addEventListener('DOMContentLoaded', ()=>{
		const elem = document.querySelectorAll('.sidenav')[0];
		const instance = M.Sidenav.init(elem, {});
		instance.open();
		//   });
		document.getElementById('sidenav_cust_trigger').addEventListener('click', e => {
			instance.open();
		});
	}
}

export default CustomerHome;