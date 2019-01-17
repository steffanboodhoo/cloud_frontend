import React, {Component} from 'react';

import {handle_cust_operations} from '../ducks/Task/Actions';

class CustOperations extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div>
            <h4>Operations</h4>
            <div className="divider"></div>
            <div className='customer_operations_container'>
                <p><b>Create a backup</b>
                <br/>Creates a backup of the database used in etender.</p>
                <div className="input-field col s12">
                    <input id="backup_name" type="text" className="validate"/>
                    <label htmlFor="backup_name">Backup oName</label>
                </div>            
                <button data-task-code='BACKUP_CREATE' onClick={this.handle_operation} className="waves-effect waves-light btn-small"><i className="material-icons left">backup</i>backup</button>
            </div>

            <div className="divider"></div>
            <div className='customer_operations_container'>
                <p><b>Stop Instance</b>
                <br/>If running, stops the application from runnning</p>   
                <button data-task-code='ETENDER_STOP' onClick={this.handle_operation} className="waves-effect waves-light btn-small" ><i className="material-icons left">pause</i>stop</button>                 
            </div>
            
            <div className="divider"></div>
            <div className='customer_operations_container'>
                <p><b>Start Instance</b>
                <br/>If stopped, starts the application</p> 
                <button data-task-code='ETENDER_START' onClick={this.handle_operation} className="waves-effect waves-light btn-small" ><i className="material-icons left">play_arrow</i>start</button>
            </div>
        </div>)
    }

    PREPARE_MAP = {
        BACKUP_CREATE: () => {
            return {backup:{backup_name:document.getElementById('backup_name').value, database_name:'webapp'}};
        }
    }

    handle_operation = (ev) => {
        const params = {
            task_code: ev.target.getAttribute('data-task-code'),
            host: this.props.data.internal_ip,
            machine_name: this.props.data.machine_name,
            instance_id: this.props.data.instance_id
        }
        let extra_params = {}
        if (params.task_code in this.PREPARE_MAP)
            extra_params = this.PREPARE_MAP[params.task_code]();
        handle_cust_operations({...params, ...extra_params})
        console.log(params);
    }
}

export default CustOperations;
