import React, {Component} from 'react';
import Console from './Console';

class Operations extends Component{
    constructor(props){
        super(props);
        this.state = {
			// git_user:this.props.user.getIn(['user_name']),
			actions:[
				{'title':'Update Etender', 'desc':'Use git to pull any updates onto the etender VMs','package':'git','type':'start'},
				{'title':'Update Ubuntu Software', 'desc':'Use apt to pull any updates onto ALL VMs','package':'apt','type':'update'},
				{'title':'Install Git', 'desc':'Use apt to install Git onto ALL VMs','package':'apt','type':'git'},
			]
		};
		this.state.filtered_actions = this.state.actions;
    }

    render(){
        return(
            <div>
                <Console/>
                <h3>Operations</h3>
                    <div className='row'>
                        <div className="input-field col s6">
                            <select id='currency'>
                            {/* <option value="" disabled selected>Choose your option</option> */}
                            <option value="ETENDERFULL" >Etender</option>
                            <option value="INFRASTRUCTURE">Centos 7</option>
                            </select>
                            <label>Instance Group</label>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="input-field col s12">
                            <input id="reason" type="text" className="validate"/>
                            <label htmlFor="reason">Reason For Update</label>
                        </div>
                    </div>

						<input onChange={this.handle_change} label='search' type='text' margin="normal"/>
						{this.state.filtered_actions.map((el,i) => {
							return (
								<div key={i}>
									<p>{el.title}</p>
									<button onClick={(ev)=>{this.handle_test(el);}}> Run</button>
									{/* <button onClick={(ev)=>{this.handle_test(el);}}> Stop </button> */}
								</div>
							);
						})}
            </div>   
        )
    }
    componentDidMount(){
        let elem = document.querySelectorAll('select')[0];
        const select_instance = M.FormSelect.init(elem,{});
        // console.log(image.get_selected_image(this.props));
    }
    handle_change = (ev) => {
		const filtered = this.state.actions.filter( el => {
			return el.title.toLowerCase().includes(ev.target.value);
		});
		this.setState({filtered_actions:filtered});
	}
	handle_test = (el) => {
		console.log('yello');
		console.log(el.title);
	}
	handle_start = () =>{
		this.props.socket.reset_messages();
		this.props.socket.start_update({username:'sboodho',password:'hellokitty'});
	}
	handle_stop = () =>{this.props.socket.start_stop()};
}

export default Operations;