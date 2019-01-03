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
import ViewInstances from '../_cust_instances/ViewInstances.js';

class CustomerHome extends Component{
	constructor(props){
		super(props);
		this.state = {
			current_view:'CREATE_INSTANCE',
			nav:null,
			view_map:{
				MY_INSTANCES:<ViewInstances/>,
				OPERATION:<Operations/>,
				CREATE_INSTANCE:<CreateInstance/>
			}
		}
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
				

				<ul id="slide-out" className="sidenav" onClick={this.handle_nav_select}>
					<li>
						<div className="user-view">
							<div className="background">
								<img src="https://www.raydarhealth.com/wp-content/uploads/2015/07/cloud-tech-computers-e1443730291360-1.png"/>
							</div>
							<a href="#name"><span className="white-text name">Steffan Boodhoo</span></a>
							<a href="#email"><span className="white-text email">boodhoo100@gmail.com</span></a>
						</div>
					</li>
					<li><a data-view='MY_INSTANCES' href="#!" className="waves-effect"><i className="material-icons">cloud</i>My Instances</a></li>
					<li><a data-view='CREATE_INSTANCE' href="#!" className="waves-effect"><i className="material-icons">add_circle</i>Create Instance</a></li>
					<li><a data-view='OPERATION' href="#!" className="waves-effect"><i className="material-icons">build</i>Operations</a></li>

					<li><div className="divider"></div></li>
					<li><a className="subheader">Account</a></li>
					<li><a data-view='ACCOUNT' className="waves-effect" href="#!">Account</a></li>
					<li><a data-view='BILLING' className="waves-effect" href="#!">Billing</a></li>
				</ul>

				<div>
					{/* <CreateInstance/> */}
					{this.state.view_map[this.state.current_view]}
					
				</div>
			</div>
			
		);
	}
	handle_nav_select = (ev) => {
		console.log(ev.target.getAttribute('data-view'))
		this.setState({current_view:ev.target.getAttribute('data-view')})
		this.state.nav.close()
	}
	componentDidMount(){
		// document.addEventListener('DOMContentLoaded', ()=>{
		const elem = document.querySelectorAll('.sidenav')[0];
		const instance = M.Sidenav.init(elem, {});
		this.setState({nav:instance})
		instance.open();
		//   });
		document.getElementById('sidenav_cust_trigger').addEventListener('click', e => {
			instance.open();
		});
	}
}

export default CustomerHome;