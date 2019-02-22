import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as instance_actions from '../ducks/Instance/Actions';
import * as socket_actions from '../ducks/Socket/Actions';
import './styles.css';

import InstanceItem from './InstanceItem';
import InstanceView from './InstanceView';

class ViewInstances extends Component{
    constructor(props){
        super(props);
        this.state = {
            ALL_INSTANCES:'ALL_INSTANCES',
            INSTANCE_VIEW:'INSTANCE_VIEW',
            current_view:'ALL_INSTANCES',
            selected_instance:null
        }
    }
    render(){
        if (this.state.current_view == this.state.ALL_INSTANCES)
            return(
                <div>
                <div className='row'>
                    {this.props.instance.getIn(['instances']).map( (elem, i) => {
                        return(
                            <div key={i} className='col s12 m6 l4'>
                                <InstanceItem instance={this.props.instance} data={elem} select_instance={this.handle_select_instance} />
                            </div>
                        )
                    })}
                </div>
                </div>);
        else if (this.state.current_view == this.state.INSTANCE_VIEW)
            return(
                <InstanceView instance={this.props.instance} data={this.state.selected_instance}/>
            );
    }

    componentDidMount(){
        this.props.instance_actions.get_running_instances()
    }

    handle_select_instance = (data) => {
        this.setState({selected_instance:data, current_view:this.state.INSTANCE_VIEW})
    }
}

const mapStateToProps = (state) => ({ instance: state.Instance });
const mapActionsToProps = (dispatch) => { 
    return {instance_actions:bindActionCreators(instance_actions, dispatch),
    socket:bindActionCreators(socket_actions, dispatch)}
};

export default connect(mapStateToProps, mapActionsToProps)(ViewInstances);

// insert into test_input (pay_country, pay_state, pay_zipcode) values ('GG','FUCK',6969);