//Main Imports -- functionality
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as UserActions from '../ducks/User/Actions.js';

//Container Imports

import RequestInstance from '../_request_instance/RequestInstance';
import Payment from '../_payment/Payment';
import ManageInstances from '../_manage_instance/ManageInstances';
import Update from '../_update/Update';

//Pure UI components and such
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import MDialog from '../common/MDialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import WbCloudy from '@material-ui/icons/WbCloudy';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {home_styles} from './styles.js';
// import Animated from '../common/AnimatedSeg';
class MDrawer extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			open: true,
			anchor: 'left',
			'containers':{
				'Update':(<Update/>),
				'manage_instances':(<ManageInstances/>)
			}
		};
	}


	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	handleChangeAnchor = event => {
		this.setState({
			anchor: event.target.value,
		});
	};

	render() {
		const { classes, theme } = this.props;
		const { anchor, open } = this.state;
		const drawer = (
			<Drawer variant="persistent" anchor="left" open={open} classes={{paper: classes.drawerPaper,}}>
				<div className={classes.drawerHeader}>
					<IconButton onClick={this.handleDrawerClose}>
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</div>
				<Divider />
				<List>
					<ListItem button>
				        <ListItemIcon> 
				        	<HomeIcon/> 
				        </ListItemIcon>
						<ListItemText primary="Home" onClick={()=>{this.switch_container('manage_instances')}} />
					</ListItem>
					<ListItem button>
						<ListItemIcon> 
				        	<WbCloudy/> 
				        </ListItemIcon>
						<ListItemText primary="Update" onClick={()=>{this.switch_container('Update')}}/>
					</ListItem>
					<Divider/>
					<ListItem button>
						<ListItemText primary="Settings" />
					</ListItem>
					<ListItem button>
						<ListItemText primary="Logout" onClick={()=>{this.props.user_actions.logout()}} />
					</ListItem>
				</List>
			</Drawer>
		);

		return (
			<div className={classes.root}>
				

				<div className={classes.appFrame}>
					<AppBar className={classNames(classes.appBar, { [classes.appBarShift]: open,
						[classes[`appBarShift-${anchor}`]]: open,})}>
						<Toolbar disableGutters={!open}>
							<IconButton color="inherit" aria-label="open drawer" onClick={this.handleDrawerOpen} className={classNames(classes.menuButton, open && classes.hide)}>
								<MenuIcon />
							</IconButton>
							<Typography variant="title" color="inherit" noWrap>
								Customer - TSTT Cloud Services
							</Typography>
						</Toolbar>
					</AppBar>
					{drawer}
					<main className={classNames(classes.content, classes[`content-${anchor}`], {
						[classes.contentShift]: open,
						[classes[`contentShift-${anchor}`]]: open,})}>					
						<div className={classes.drawerHeader} />
						
						{(()=>{
							if(this.state.main_container==='instance_req')
								return <RequestInstance switch={this.switch_container}/>;
							else if(this.state.main_container==='Update')
								return <Update switch={this.switch_container}/>;
							else //default
								return <ManageInstances switch={this.switch_container}/>;
						})()}
					</main>
				</div>
				<MDialog/>
			</div>
		);
	}

	switch_container = (container)=>{
		this.setState({'main_container':container});
		this.forceUpdate();
	}
}

MDrawer.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) =>{
	return {app:state.App};
};
const mapActionsToProps = (dispatch) =>{
	return {user_actions:bindActionCreators(UserActions,dispatch)};
};

const mdrawer = withStyles(home_styles, {withTheme: true})(MDrawer);
export default connect(mapStateToProps,mapActionsToProps)(mdrawer);