import React, {Component} from 'react';

import * as instance from '../ducks/Instance/Selectors';

class InstanceItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const data = this.props.data;
        const metric = instance.getMetric( this.props, data.machine_name);
        return(<div className='z-depth-1 instance_item waves-effect hoverable' onClick={this.handle_select_instance}>
            <div className='row'>
                <i className="large material-icons">computer</i>
            </div>
            <div className='row'>
            <div className='col s6'>
                    <h5>DETAILS</h5>
                    <h6>Identification</h6>
                    {`Machine Name: ${data.machine_name}`}<br/>
                    {`Instance Type: ${data.machine_name}`}<br/>
                    {`IP Address: ${data.external_ip}`}<br/>
                </div>
                <div className='col s6'>
                    <h5>METRICS</h5>
                    <h6>Operational</h6>
                    {`cpu: ${metric.cpu}%`}<br/>
                    {`memory: ${metric.memory}%`}<br/>
                    <h6>Storage</h6>
                    {`files: ${metric.storage.files}%`}<br/>
                    {`db: ${metric.storage.db}%`}
                </div>                
            </div>
        </div>);
    }

    componentDidMount(){
        console.log('InstanceItem did mount');
    }
    handle_select_instance = (ev) => {
        this.props.select_instance(this.props.data);
    }
}

export default InstanceItem;