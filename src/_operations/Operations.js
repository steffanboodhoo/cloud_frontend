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
            target_type:'INSTANCE',
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
        let args = {
            task_code:el.task_code,
            reason:el.reason,
            group_name:this.state.target_data
        }
        args = this.format_special_task(el.task_code, args, el.extra);
        this.props.socket_actions.send_group_task(args);
    }
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
    
    format_special_task = (task_code, args, extra) => {
        const param_map = {
            CUSTOM_QUERY:'query'
        };
        if (task_code in param_map){
            args[ param_map[task_code] ] = extra
        }
        return args
    }
}

const mapStateToProps = (state) => {return{user:state.User};};
const mapActionsToProps = (dispatch) => {
	return {socket_actions:bindActionCreators(socket_actions,dispatch)};
};

export default connect(mapStateToProps, mapActionsToProps)(Operations);