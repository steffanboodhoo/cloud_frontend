import React,{Component} from 'react';
import Bundle from './Bundle.js';

import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

class BundleList extends Component{
	constructor(props){
		super(props);		
		this.state={
			init:0,
			index:-1
		};
	}
	render(){
		const { classes } = this.props;
		return(
			<div  className={classnames(classes.list)} >
				{this.props.bundles.map( (obj,i)=>{					
					return <Bundle selectBundle={this.handleBundleClick} level={this.state['level'+i]} {...obj} key={i} index={i}/>
				})}
			</div>
		);
	}
	
	handleBundleClick = (index, id) => {
		let new_state = {};
		//A new bundle was selected (or a bundle for the first time)
		if(index != this.state.index){
			this.props.selectBundle(id);

			new_state['index'] = index; //update index of selected bundle
			new_state['level'+index] = 10;// Newly selected Bundle level elevation
			if(this.state.index!=-1)
				new_state['level'+this.state.index] = 2; //Set old selected Bundle to low elevation
		}
		this.setState(new_state);
	}


	shouldComponentUpdate(nextProps, nextState){
		console.log('update called');
		if(!nextProps)
			nextProps.bundles.forEach( (obj,i)=> nextState['level'+i]=2);
		return true;
	}
	
}

const styles = theme => ({
	list: {
		maxWidth: '100vh',
		marginLeft:'auto',
		marginRight:'auto',
		display:'flex',
		alignItems:'center',
		justifyContent:'center',
	}
});

export default withStyles(styles)(BundleList);

