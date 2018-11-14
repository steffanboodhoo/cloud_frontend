import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import CircularProgress from '@material-ui/core/CircularProgress';
import blue from '@material-ui/core/colors/blue';

const styles = theme => ({
	progress: {
		margin: theme.spacing.unit * 2,
	},
});

class MDialog extends Component{
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render(){
		const { classes, theme } = this.props;
		return (
			<div>
				<Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
					<DialogTitle id="alert-dialog-title">{"Loading"}</DialogTitle>
					<DialogContent>
						<CircularProgress className={classes.progress} style={{ color: blue[500] }} size={50} thickness={5} />
					</DialogContent>
				</Dialog>
			</div>);
	}
}

MDialog.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme:true})(MDialog);