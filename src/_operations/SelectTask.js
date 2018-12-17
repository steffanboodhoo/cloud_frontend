import React, {Component} from 'react';

class SelectTask extends Component{
    constructor(props){
        super(props);
        this.state = {
            filtered_tasks:this.props.task.getIn(['tasks'])
        }
    }

    render(){
        return(<div>
            <h4>Task</h4>                        
            <div className="input-field col s12">
                <input id="reason" type="text" className="validate"/>
                <label htmlFor="reason">Reason For Task</label>
            </div>

            <div className="input-field col s12">
                <input id='task_search' onChange={this.handle_filter_change} type='text' margin="normal"/>
                <label htmlFor="task_search">Search Task Name</label>
                {this.state.filtered_tasks.map((el,i) => {
                    return (
                        <div key={i}>
                            <p><b>{el.task_name}</b>: {el.description}</p>
                            <button onClick={(ev)=>{this.props.handle_group_task(el);}}> Run Task</button>
                        </div>
                    );
                })}
            </div>
        </div>);
    }

    handle_filter_change = (ev) => {
		const filtered = this.props.task.getIn(['tasks']).filter( el => {
            const text = ev.target.value.toLowerCase();
            return el.task_name.toLowerCase().includes(text);
            //||el.description.toLowerCase().includes(text)||text=='';
		});
		this.setState({filtered_tasks:filtered});
    }
}

export default SelectTask;