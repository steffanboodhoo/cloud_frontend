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
            target_type:'GROUP'
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
                        <SelectTask handle_select_task={this.state.target_type=='INSTANCE'?this.handle_instance_task:this.handle_group_task}/>
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
        console.log(document.getElementById('group_select').value);
        // let task_code = 'TEST_TASKS'
        // let group_name = 'centos_etender_apps'
        // let args  = {task_code, group_name}
        // this.props.socket_actions.send_group_task(args);
    }
    handle_instance_task = (el) => {
        console.log(el);
        console.log(document.getElementById('group_select').value);
        // let task_code = 'TEST_TASKS'
        // let group_name = 'centos_etender_apps'
        // let args  = {task_code, group_name}
        // this.props.socket_actions.send_group_task(args);
	}
}

const mapStateToProps = (state) => {return{user:state.User};};
const mapActionsToProps = (dispatch) => {
	return {socket_actions:bindActionCreators(socket_actions,dispatch)};
};

export default connect(mapStateToProps, mapActionsToProps)(Operations);