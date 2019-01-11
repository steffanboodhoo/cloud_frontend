import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as instance_actions from '../ducks/Instance/Actions';
import * as socket_actions from '../ducks/Socket/Actions';
import * as instance from '../ducks/Instance/Selectors';

class ViewInstances extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props)
        return(<div>
            
            {this.props.instance.getIn(['instances']).map( (elem, i) => {
                console.log(instance.getMetric( this.props, elem.machine_name));
                const metric = instance.getMetric( this.props, elem.machine_name);
                return (<div key={i}>
                    {`cpu: ${metric.cpu}%`}<br/>
                    {`memory: ${metric.memory}%`}<br/>
                    STORAGE <br/>
                    {`files: ${metric.storage.files}%`}<br/>
                    {`db: ${metric.storage.db}%`}
                </div>);
            })
            }
        </div>);
    }

    componentDidMount(){
        this.props.instance_actions.get_instances();
    }
}

const mapStateToProps = (state) => ({ instance: state.Instance });
const mapActionsToProps = (dispatch) => { 
    return {instance_actions:bindActionCreators(instance_actions, dispatch),
    socket:bindActionCreators(socket_actions, dispatch)}
};

export default connect(mapStateToProps, mapActionsToProps)(ViewInstances);