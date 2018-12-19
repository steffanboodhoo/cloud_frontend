import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as socket_actions from '../ducks/Socket/Actions';
// import * as task_actions from '../ducks/Task/Actions';

import Console from './Console';
import SelectTask from './SelectTask';
// import SelectGroup from './SelectGroup';
import SelectInstance from './SelectInstance';
import SelectGroup from './SelectGroup';

class Operations extends Component{
    constructor(props){
        super(props);
        this.state = {
            target_data:null,
            target_type:'INSTANCE'
        }
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

                    <div  className='col s6'>
                        {this.state.target_type=='INSTANCE'?
                            <SelectInstance handle_select_target={this.handle_select_target}/>: <SelectGroup handle_select_target={this.handle_select_target}/>
                        }
                    </div>
                    <div className='col s4'>
                        <SelectTask handle_select_task={this.state.target_type=='INSTANCE'?this.handle_instance_task:this.handle_group_task} target_type={this.state.target_type}/>
                    </div>
                    
                </div>                    
            </div>   
        )
    }

    componentDidMount(){
        let elem = document.querySelectorAll('select')[0];
        const select_instance = M.FormSelect.init(elem,{});
    }
    
    handle_select_target = (el) => {
        this.setState({target_data:el});
        console.log(el);
    }

	handle_group_task = (el) => {
        console.log(el);
        console.log(this.state.target_data);
        // let task_code = 'TEST_TASKS'
        // let group_name = 'centos_etender_apps'
        // let args  = {task_code, group_name}
        // this.props.socket_actions.send_group_task(args);
    }
    handle_instance_task = (el) => {
        console.log(el);
        console.log(this.state.target_data);
        const args = {task_code:el.task_code, 
            machine_name:this.state.target_data.machine_name,
            host:this.state.target_data.internal_ip,
            machine_id:this.state.target_data.machine_id
        }
        this.props.socket_actions.send_instance_task(args);

        // let task_code = 'TEST_TASKS'
        // let group_name = 'centos_etender_apps'
        // let args  = {task_code, group_name}
	}
}

const mapStateToProps = (state) => {return{user:state.User};};
const mapActionsToProps = (dispatch) => {
	return {socket_actions:bindActionCreators(socket_actions,dispatch)};
};

export default connect(mapStateToProps, mapActionsToProps)(Operations);