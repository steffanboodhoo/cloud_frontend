import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
class Form extends Component{
	constructor(props){
		super(props);
		// this.props = props;
		this.state = {};
		Object.entries(this.props.form).map( ([key,obj]) => {
			if(obj.elem === 'select')
				this.state[key] = obj.values[0];
		});
	}

	render(){
		// <label className="control-label">{obj.label}</label>
		return(

			<div id='form'>
				<Grid container direction="column" alignItems="center" justify="center">{
					Object.entries(this.props.form).map( ([key, obj], i) => {
						return( 
							<Grid  item lg={12} key={i}>							
								{this.handleCreateInput(key,obj)}
							</Grid>
						);
					})}
				</Grid>
			</div>
		);	
	}

	handleCreateInput(key, obj){
		let extra_props = {};
		switch(obj.elem){

		case 'input':
			if(obj.type === 'date')
				extra_props['InputLabelProps'] = {shrink: true,};
			return <TextField id={key} fullWidth={true} label={obj.label} type={obj.type} margin="normal" {...extra_props}/>
		
		case 'checkbox':{
			return obj.values.map( (val,i) => {
				return(
					<div key={i}>
						<label>{val}</label>
						<input id={key+i}type="checkbox" name={val} value={val} />	
					</div>
				);
			});			
		}

		case 'select':{
			return (
				<Select id={key} fullWidth={true} name={key} className="form-control" value={this.state[key]} onChange={this.handleChange}>
					{obj.values.map( (val,i) => {
						return <MenuItem key={i} value={val}>{val}</MenuItem>
					})}
				</Select>
			);
		}
		case 'button':{
			return(
				<Button fullWidth={true} variant="contained" color="primary" onClick={ ()=>{this.handleSubmit();}} >
					{obj.label}
				</Button>
			)
		}
		}
	}
	handleChange = (event) =>{ this.setState({[event.target.name]:event.target.value});}

	handleSubmit(){
		let data = {};
		Object.entries(this.props.form).forEach( ([key,obj]) => {
			switch(obj.elem){			
			case 'button':
				break;
			case 'checkbox':
				data[key] = [];
				for(let i=0; i<obj.values.length; i++){
					let elem = document.getElementById(key+i);
					if(elem.checked)
						data[key].push(elem.value);
				}
				data[key] = data[key].join();
				break;
			default:
				data[key] =  document.getElementById(key).value;
				break;
			}
		});

		this.props.submit(data);
	}
	componentDidMount(){
		document.getElementById('form').addEventListener('keydown', e => {
			if(!e){
				let e = window.event;
			}
			if( e.keyCode == 13 )
					this.handleSubmit()
			
		})
	}
}

export default Form;