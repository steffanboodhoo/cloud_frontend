import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as template_actions from '../ducks/Template/Actions';
import * as instance_actions from '../ducks/Instance/Actions'

import * as template from '../ducks/Template/Selector';

import './create_instance.css';
import SelectTemplate from './SelectTemplate';
import PurchaseInstance from './PurchaseInstance';

class RequestInstance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_template: null,
            stage: 0,
            views: [<SelectTemplate templates={template.get_templates(this.props)} handle_select_template={this.handle_select_template.bind(this)} />, <PurchaseInstance changeStage={this.changeStage} />]
        }
    }

    render() {
        return (
            <div>{this.state.stage == 0 ?
                <SelectTemplate templates={template.get_templates(this.props)} handle_select_template={this.handle_select_template.bind(this)} />
                : <PurchaseInstance selected_template={this.state.selected_template} handle_submit_request={this.handle_submit_request.bind(this)} request_status={this.props.request_status}/>}
            </div>
        );
    }

    handle_select_template(template) {
        this.setState({ selected_template: template })
        this.changeStage(1);
    }
    handle_submit_request(request, payment) {
        request['template_id'] = this.state.selected_template.template_id;
        const params = { request, payment };
        this.props.instance_actions.request_instance(params);
    }

    componentDidMount() {
        this.props.template_actions.get_templates();
    }
    // handle_submit_payment(request, payment) {
    //     request['instance_id'] = this.state.selected_instance.instance_id;
    //     const params = { request, payment }
    //     this.props.instance_actions.renew_instance(params);
    // }
    // selectTemplate = function(template_id){
    //     this.props.template_actions.select_template(template_id);
    //     this.props.changeStage(1);
    // }.bind(this);
    changeStage = (newStage) => {
        this.setState({ stage: newStage });
    }
}
const mapStateToProps = (state) => {
    return { template:state.Template, request_status:state.RequestStatus };
};
const mapActionsToProps = (dispatch) => {
    return { template_actions: bindActionCreators(template_actions, dispatch), instance_actions: bindActionCreators(instance_actions, dispatch) };
};

export default connect(mapStateToProps, mapActionsToProps)(RequestInstance);