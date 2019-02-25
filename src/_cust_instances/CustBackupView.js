import React, {Component} from 'react';
import Axios from 'axios';

import {handle_cust_operations} from '../ducks/Task/Actions';

class CustBackupView extends Component{
    constructor(props){
        super(props);
        this.state = {
            backups: []
        }
    }

    render(){
        return(<div>
            <h4>Backups</h4>
            {this.state.backups.map( (el, i) => {
                return (<this.backup_item key={i} data={el}/>)
            })}
        </div>)
    }

    componentDidMount(){
        console.log(this.props.data)
        const params = {fields:[], filters:{instance_id:this.props.data.instance_id}}
        Axios.post('http://localhost:8000/backup/select/closed', params).then( resp => {
            console.log(resp.data)
            this.setState({backups:resp.data})
        })
    }

    backup_item = (props) => {
        return(<div className='row'>
            <div className="divider"></div>
            <div className='col l3 s6'> {props.data.backup_name} </div>
            <div className='col l3 s6'> {props.data.backup_date} </div>
            <div className='col l3 s6'> 
                <button data-task-code='BACKUP_RESTORE' data-backup-name={props.data.backup_name} onClick={this.handle_backup_action} className="waves-effect waves-light btn-small" >Restore</button>
            </div>
            <div className='col l3 s6'> 
                <button data-task-code='BACKUP_REMOVE' data-backup-name={props.data.backup_name} data-backup-id={props.data.backup_id} onClick={this.handle_backup_action} className="waves-effect waves-light btn-small">delete</button>
            </div>
        </div>);
    }

    handle_backup_action = (ev) => {
        const params = {
            task_code: ev.target.getAttribute('data-task-code'),
            host: this.props.data.internal_ip,
            machine_name: this.props.data.machine_name,
            
        }
        if (params.task_code == 'BACKUP_REMOVE'){
            params['backup_id'] = ev.target.getAttribute('data-backup-id')
            params['backup_name'] = ev.target.getAttribute('data-backup-name')
        }else if(params.task_code == 'BACKUP_RESTORE'){
            params['backup'] = {'backup_name':ev.target.getAttribute('data-backup-name'), 'database_name':'webapp'}
        }
        handle_cust_operations(params)

            // extra_params = this.PREPARE_MAP[params.task_code]();

    }

}

export default CustBackupView;