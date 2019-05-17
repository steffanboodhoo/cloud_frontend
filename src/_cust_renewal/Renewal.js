import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as instance_actions from '../ducks/Instance/Actions';
import InstancesView from './InstancesView';
import InstanceRenewal from './InstanceRenewal';
import './renewal.css'

class Renewal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_instance: null
        }
    }

    render() {
        console.log(this.props.instance.getIn(['instances']))
        return (<div className='row'>
            <div className='col s7 container'>
                <InstancesView instances={this.props.instance.getIn(['instances'])} handle_select_instance={this.handle_select_instance} selected_instance={this.state.selected_instance}/>
            </div>
            <div className='col s5 container'>
                <InstanceRenewal handle_submit_payment={this.handle_submit_payment.bind(this)}/>
            </div>
        </div>);
    }

    handle_select_instance = (el) => {
        this.setState({ selected_instance: el })
        console.log(el)
    }
    handle_submit_payment(request, payment) {
        request['instance_id'] = this.state.selected_instance.instance_id;
        const params = { request, payment }
        this.props.instance_actions.renew_instance(params);
    }

    componentDidMount() {
        if (this.props.instance.getIn(['instances']).length == 0)
            instance_actions.get_instances();
    }
}

const mapStateToProps = (state) => ({ instance: state.Instance })
const mapActionsToProps = (dispatch) => ({ instance_actions: bindActionCreators(instance_actions, dispatch) })
export default connect(mapStateToProps, mapActionsToProps)(Renewal);