import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class RenewalInstance extends Component {
    render() {
        return (<div>
            {(this.props.selected_instance != null ? this.instance_details(this.props.selected_instance):this.default_view())}
        </div>)
    }

    instance_details = (instance) => {
        return (<div>
            {instance.machine_name}
        </div>)
    }
    default_view = () => {
        return (<div><h1>Please select a machine</h1></div>)
    }

}

const mapStateToProps = (state) => ({});
const mapActionsToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapActionsToProps)(RenewalInstance);