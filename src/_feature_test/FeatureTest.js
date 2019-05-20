import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as request_status_actions from '../ducks/RequestStatus/Actions';

import RequestStatusView from '../common/RequestStatusView';

class FeatureTest extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (<div>
            <h1>Feature Testing</h1>
            <button onClick={this.handle_click.bind(this)} >test</button>
            <RequestStatusView request_status={this.props.request_status} request_name={'REQUEST_STATUS/TEST'}/>
        </div>)
    }
    handle_click(ev){
        this.props.request_status_actions.update_request_status('REQUEST_STATUS/PENDING', 'REQUEST_STATUS/TEST', 'this is a pending test');
    }
}

//REQUEST STATUS 
// const NONE = 'REQUEST_STATUS/NONE';
// const PENDING = 'REQUEST_STATUS/PENDING';
// const FAIL = 'REQUEST_STATUS/FAIL';
// const ERROR = 'REQUEST_STATUS/ERROR';
// const SUCCESS = 'REQUEST_STATUS/SUCCESS';
// export const REQUEST_STATUS = {NONE, PENDING, FAIL, ERROR, SUCCESS};

// //REQUEST NAMES
// const LOG_IN = 'REQUEST_STATUS/LOG_IN';
// const LOGOUT = 'REQUEST_STATUS/LOGOUT';
// const REQUEST_INSTANCE = 'REQUEST_STATUS/REQUEST_INSTANCE';
// const REGISTER = 'REQUEST_STATUS/REGISTER';
// export const REQUEST_NAME = {LOG_IN, LOGOUT, REQUEST_INSTANCE, REGISTER};

const mapStateToProps = (state) => ({ request_status:state.RequestStatus});
const mapActionsToProps = (dispatch) => ({request_status_actions:bindActionCreators(request_status_actions, dispatch)})
export default connect(mapStateToProps,mapActionsToProps)(FeatureTest);