//Main Imports -- functionality
import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as app_actions from '../ducks/App/Actions';

import ViewInstances from '../_cust_instances/ViewInstances.js';
import CreateInstance from '../_create_instance/CreateInstance';
import ViewPayments from '../_tracking/_payments/ViewPayments';
import Operations from '../_operations/Operations';
import './home.css';


class CustomerHome extends Component{
	constructor(props){
		super(props);
		console.log(this.props)
		this.state = {
			current_view:'MY_INSTANCES',
			nav:null,
			view_map:{
				MY_INSTANCES:<ViewInstances/>,
				VIEW_PAYMENTS:<ViewPayments/>,
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
				

				<ul id="cust-nav-slide-out" className="sidenav" onClick={this.handle_nav_select}>
					<li>
						<div className="user-view">
							<div className="background">
								<img src="https://www.raydarhealth.com/wp-content/uploads/2015/07/cloud-tech-computers-e1443730291360-1.png"/>
							</div>
							{/* <a href="#name"><span className="white-text name">Steffan Boodhoo</span></a> */}
							<a href="#email"><span className="white-text email">{this.props.app.getIn(['user']).email}</span></a>
						</div>
					</li>
					<li><a data-view='MY_INSTANCES' href="#!" className="waves-effect"><i className="material-icons">cloud</i>My Instances</a></li>
					<li><a data-view='VIEW_PAYMENTS' href="#!" className="waves-effect"><i className="material-icons">list</i>View Payments</a></li>
					<li><a data-view='CREATE_INSTANCE' href="#!" className="waves-effect"><i className="material-icons">add_circle</i>Request Instance</a></li>

					<li><div className="divider"></div></li>
					<li><a className="subheader">Account</a></li>
					<li><a data-view='LOGOUT' className="waves-effect" href="#!">Logout</a></li>
					<li><a data-view='ACCOUNT' className="waves-effect" href="#!">Account</a></li>
					<li><a data-view='BILLING' className="waves-effect" href="#!">Billing</a></li>
				</ul>

				<div>
					{this.state.view_map[this.state.current_view]}
					
				</div>
			</div>
			
		);
	}
	handle_nav_select = (ev) => {
		if(ev.target.getAttribute('data-view')=='LOGOUT'){
			this.props.app_actions.log_out('customer', this.props.history.push);
		}else{
			this.setState({current_view:ev.target.getAttribute('data-view')})
		}
		this.state.nav.close()
	}
	componentDidMount(){
		const instance = M.Sidenav.init(document.getElementById('cust-nav-slide-out'), {});
		this.setState({nav:instance})
		instance.open();

		document.getElementById('sidenav_cust_trigger').addEventListener('click', e => {
			instance.open();
		});
	}
}
const mapStateToProps = (state) => ({app: state.App});
const mapActionsToProps = (dispatch) => {return {app_actions:bindActionCreators(app_actions, dispatch)}}
export default connect(mapStateToProps, mapActionsToProps)(CustomerHome);