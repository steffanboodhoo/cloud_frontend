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
            target_type:'GROUP',
            reason:''
        }
    }

    render(){
        return(
            <div>
                <div className='row'>
                    <Console/>
                </div>

                <div className='row'>
                
                    <div className='col s2' onClick={this.handle_select_target_type}>
                        {/* <div onClick={this.handle_select_target_type}> */}
                        <div data-target-type='GROUP' className="col s12 waves-effect hoverable instance_type_select z-depth-2">
                                Groups
                        </div>
                        <div data-target-type='INSTANCE' className="col s12 waves-effect hoverable instance_type_select z-depth-2">
                                Instances
                        </div>
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
        
    }
    // Select Group menu or Instance menu - target_type
    handle_select_target_type = (ev) => {
        const target_type = ev.target.getAttribute('data-target-type');
        console.log(target_type)
        this.setState({target_type});
    }
    // Select specific group or instance to perform tasks - target
    handle_select_target = (el) => {
        this.setState({target_data:el});
        console.log(el);
    }

    //format arguments and send group task
	handle_group_task = (el) => {
        let args = {
            task_code:el.task_code,
            reason:el.reason,
            group_name:this.state.target_data
        }
        args = this.format_special_task(el.task_code, args, el.extra);
        this.props.socket_actions.send_group_task(args);
    }
    //format arguments and send instance task
    handle_instance_task = (el) => {
        let args = {
            task_code:el.task_code, 
            reason:el.reason,
            machine_name:this.state.target_data.machine_name,
            host:this.state.target_data.internal_ip,
            machine_id:this.state.target_data.machine_id
        }
        args = this.format_special_task(el.task_code, args, el.extra)
        this.props.socket_actions.send_instance_task(args);
    }
    //If task is a special task (given by TASK CODE) then format params
    format_special_task = (task_code, args, extra) => {
        const prepare_map = {
            CUSTOM_QUERY: (args, extra)=>{return {query:extra, ...args}},
            BACKUP_DB: (args, extra)=> { 
                const values = extra.split(',').map( e => e.trim() );
                return {...args, backup:{database_name:values[0], backup_name:values[1]}}
            }
        }
        if (task_code in prepare_map)
            return prepare_map[task_code](args, extra);
        return args;
    }
}

const mapStateToProps = (state) => {return{user:state.User};};
const mapActionsToProps = (dispatch) => {
	return {socket_actions:bindActionCreators(socket_actions,dispatch)};
};

export default connect(mapStateToProps, mapActionsToProps)(Operations);