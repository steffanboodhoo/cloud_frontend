import React, {Component} from 'react';

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
                {/* <div className='row'> */}
                    <button className="waves-effect waves-light btn-small" ><i className="material-icons left">backup</i>backup</button>
                {/* </div> */}
            </div>

            <div className="divider"></div>
            <div className='customer_operations_container'>
                <p><b>Stop Instance</b>
                <br/>If running, stops the application from runnning</p>   
                <button className="waves-effect waves-light btn-small" ><i className="material-icons left">pause</i>stop</button>                 
            </div>
            
            <div className="divider"></div>
            <div className='customer_operations_container'>
                <p><b>Start Instance</b>
                <br/>If stopped, starts the application</p> 
                <button className="waves-effect waves-light btn-small" ><i className="material-icons left">play_arrow</i>start</button>
            </div>
        </div>)
    }
}

export default CustOperations;
