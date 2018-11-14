import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = theme => ({
	card: {
		display: 'flex',
		'margin-top':'2vh'
	},
	details: {
		display: 'flex',
		flex:2,
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
	},
	
	graph: {
		
	},
	button: {
		margin: theme.spacing.unit,
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
	},
});


const InstanceItem = (props) => {
	const { classes, theme } = props;
	
	const handle_purchase = (ev) =>{
		console.log(props.instance_id)
		props.instance_change(props.instance_id);
		props.switch('payment');
	};
	return (
		<div>
			<Card className={classes.card}>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography variant="headline">{props.inst_name}</Typography>
						<Typography variant="subheading" color="textSecondary">Status: {props.inst_status}</Typography>
						<Typography variant="subheading" color="textSecondary">Expiry: {props.expiration_date==null?'N/A':props.expiration_date}</Typography>
					</CardContent>
					<div className={classes.controls}>

				
					</div>
				</div>
				<div className={classes.details}>
					<div className={classes.content}>
						<Button variant="contained" color="primary"  className={classes.button} onClick={handle_purchase}> Payments</Button>
					</div>					
					<div className={classes.content}>
						<Button variant="contained" color="secondary" disabled={props.inst_status==='RUNNING'?false:true} className={classes.button}> Deactivate</Button>
					</div>
				</div>	
				<div className={classes.details}>
					<CardMedia className={classes.graph} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCImeWo9Pp4jMx9ibyB15VTDynhgPAWbkBYlWJ3d5kGxcKouG" title="Live from space album cover"/>	
				</div>			
			</Card>
		</div>
	);
};

InstanceItem.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(InstanceItem);