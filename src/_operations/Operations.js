import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as socket_actions from '../ducks/Socket/Actions';
import * as task_actions from '../ducks/Task/Actions';

import Console from './Console';
import SelectTask from './SelectTask';
import SelectGroup from './SelectGroup';

class Operations extends Component{
    constructor(props){
        super(props);
        this.state = {tasks:this.props.task.getIn(['tasks'])};
		this.state.filtered_tasks = this.state.tasks;
    }

    render(){
        return(
            <div>
                <div className='row'>
                    <Console/>
                </div>

                <div className='row'>
                    <div className='col s2'>
                        <ul>
                            <li>Groups</li>
                            <li>Instances</li>
                        </ul>
                    </div>

                    <div  className='col s5'>
                        <SelectGroup />
                    </div>
                    <div className='col s5'>
                        <SelectTask filtered_tasks={this.props.task.getIn(['tasks'])} task={this.props.task} handle_group_task={this.handle_group_task}/>
                    </div>
                    
                </div>                    
            </div>   
        )
    }

    componentDidMount(){
        let elem = document.querySelectorAll('select')[0];
        const select_instance = M.FormSelect.init(elem,{});
        this.props.task_actions.get_tasks({'filters':{'type':'GROUP'}})
    }
    
	handle_group_task = (el) => {
        console.log(el);
        console.log(document.getElementById('group_select').value);
        // let task_code = 'TEST_TASKS'
        // let group_name = 'centos_etender_apps'
        // let args  = {task_code, group_name}
        // this.props.socket_actions.send_group_task(args);
	}
}

const mapStateToProps = (state) => {return{user:state.User, task:state.Task};};
const mapActionsToProps = (dispatch) => {
	return {socket_actions:bindActionCreators(socket_actions,dispatch), task_actions:bindActionCreators(task_actions,dispatch)};
};

export default connect(mapStateToProps, mapActionsToProps)(Operations);