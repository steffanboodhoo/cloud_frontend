import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as task_actions from '../ducks/Task/Actions';

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
                <textarea id="extra" className="validate" rows="5" cols="50" defaultValue="Enter extra data here e.g. query for custom query"/>

                {/* <label htmlFor="extra">Extra Data e.g. custom query</label> */}
            </div>

            <div className="input-field col s12">
                <input id='task_search' onChange={this.handle_filter_change} type='text' margin="normal"/>
                <label htmlFor="task_search">Search Task Name</label>
                {this.state.filtered_tasks.map((el,i) => {
                    return (
                        <div key={i}>
                            <p><b>{el.task_name}</b>: {el.description}</p>
                            <button onClick={(ev)=>{
                                el.extra = document.getElementById('extra').value;
                                this.props.handle_select_task(el);
                            }}> Run Task</button>
                        </div>
                    );
                })}
            </div>
        </div>);
    }

    componentDidMount(){
        const filters = {type:`${this.props.target_type}`}
        this.props.task_actions.get_tasks(filters);
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

const mapStateToProps = (state) => ({task:state.Task});
const mapActionsToProps = (dispatch) => ({task_actions:bindActionCreators(task_actions,dispatch)});
export default connect(mapStateToProps, mapActionsToProps)(SelectTask);