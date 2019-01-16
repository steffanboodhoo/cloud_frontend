import React, {Component} from 'react';
import Axios from 'axios';

class CustBackupView extends Component{
    constructor(props){
        super(props);
        this.state = {
            backups: []
        }
    }

    render(){
        return(<div>
            <h4>Details</h4>
            {this.state.backups.map( (el, i) => {
                return (<this.backup_item key={i} data={el}/>)
            })}
        </div>)
    }

    componentDidMount(){
        console.log(this.props.data)
        const params = {fields:[], filters:{instance_id:this.props.data.instance_id}}
        Axios.post('http://localhost:9000/backup/select/open', params).then( resp => {
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
                <button data-backup-code='BACKUP_RESTORE' onClick={this.handle_backup_action} className="waves-effect waves-light btn-small" >Restore</button>
            </div>
            <div className='col l3 s6'> 
                <button data-backup-code='BACKUP_DELETE' onClick={this.handle_backup_action} className="waves-effect waves-light btn-small">delete</button>
            </div>
        </div>);
    }

    handle_backup_action = (ev) => {
        console.log(ev.target.getAttribute('data-backup-code'));
        // Axios.post('http://localhost:9000/backup-remove')
    }

}

export default CustBackupView;