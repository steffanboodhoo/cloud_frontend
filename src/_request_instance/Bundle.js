import React, {Component} from 'react';

// import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloudIcon from '@material-ui/icons/Cloud';

import ButtonBase from '@material-ui/core/ButtonBase';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



class Bundle extends Component{
	constructor(props){
		super(props);
		this.state ={
			expanded: false					
		};
	}

	handleClick = (e) => {
		if( e.target.id === 'expand' || e.target.id === 'expand_icon')
			this.setState({ expanded: !this.state.expanded });
		else
			this.props.selectBundle(this.props.index, this.props.bundle_id);
	};
	
	render(){
		const { classes } = this.props;

		return (
			<ButtonBase onClick={ this.handleClick }>
				<Card className={classes.card} elevation={this.props.level}>
					<CardContent>
						<CloudIcon/><br/>
						{this.props.bundle_name}<br/>
						Memory {this.props.memory}GB<br/>
						Storage {this.props.storage}GB<br/>
						Processors {this.props.processors}<br/>
						Speed {this.props.speed}Ghz
					</CardContent>


					<div id='expand' className={classnames(classes.expand, {[classes.expandOpen]: this.state.expanded,})} 
						aria-expanded={this.state.expanded}
						aria-label="Show more">
						<ExpandMoreIcon id='expand'/>
					</div>
						
					<Collapse id='expand' in={this.state.expanded} timeout="auto" unmountOnExit>
						<div id='expand'>
							<CardContent className={classes.expanded_content}>
								<Typography>	
									{this.props.bundle_desc}
								</Typography>
							</CardContent>
						</div>
					</Collapse>
				</Card>
			</ButtonBase>
		);
	}
}

const styles = theme => ({
	card: {
		maxWidth: '30vh',
		padding:'1vw'
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	actions: {
		display: 'flex',
	},
	expand: {
		transform: 'rotate(0deg)',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
		marginLeft: 'auto',
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	expanded_content:{
		maxWidth:'30vh',
		
	}
});

export default withStyles(styles)(Bundle);