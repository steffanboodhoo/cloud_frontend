//Main Imports -- functionality
import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as app_actions from '../ducks/App/Actions';

// import ViewPayments from '../_tracking/_payments/ViewPayments';
import Operations from '../_operations/Operations';
import './home.css';


class AdminHome extends Component{
	constructor(props){
		super(props);
		console.log(this.props)
		//OTHER VIEWS TO BE IMPLEMENTED
		//- ADMIN INSTANCES - A view of all active instances with an indicator of health, this view is to allow an admin to find out more information about a machine such as IP or how the system views it health-wise( will not have live statistics or anything too much processing at once)
		//- OVERVIEW - A list of issues created by the machines (e.g. httpd error, low disk space), and a list of issues from customers
		this.state = {
			current_view:'OPERATION',
			nav:null,
			view_map:{
				OPERATION:<Operations/>
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
							<a href="#name"><span className="white-text name">Steffan Boodhoo</span></a>
							<a href="#email"><span className="white-text email">boodhoo100@gmail.com</span></a>
						</div>
					</li>
					<li><a data-view='OVERVIEW' href="#!" className="waves-effect"><i className="material-icons">cloud</i>Overview</a></li>
					<li><a data-view='OPERATION' href="#!" className="waves-effect"><i className="material-icons">build</i>Operations</a></li>
					<li><a data-view='ADMIN_INSTANCES' href="#!" className="waves-effect"><i className="material-icons">add_circle</i>All Instances</a></li>
					

					<li><div className="divider"></div></li>
					<li><a className="subheader">Account</a></li>
					<li><a data-view='LOGOUT' className="waves-effect" href="#!">Logout</a></li>
				</ul>

				<div>
					{this.state.view_map[this.state.current_view]}
					
				</div>
			</div>
			
		);
	}
	handle_nav_select = (ev) => {
		if(ev.target.getAttribute('data-view')=='LOGOUT'){
			this.props.app_actions.log_out();
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
const mapStateToProps = (state) => ({});
const mapActionsToProps = (dispatch) => {return {app_actions:bindActionCreators(app_actions, dispatch)}}
export default connect(mapStateToProps, mapActionsToProps)(AdminHome);