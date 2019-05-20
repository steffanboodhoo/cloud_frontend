import React, { Component } from 'react';
import {REQUEST_STATUS} from '../ducks/RequestStatus/Actions';
import * as request_status from '../ducks/RequestStatus/Selectors';

import './RequestStatus.css';

class RequestStatusView extends Component {
    constructor(props) {
        super(props);
        this.classes = {}
        this.classes[REQUEST_STATUS.PENDING] = 'pending'
        this.classes[REQUEST_STATUS.FAIL] = 'fail'
        this.classes[REQUEST_STATUS.SUCCESS] = 'success'
        this.classes[REQUEST_STATUS.ERROR] = 'error'
        this.views = {}
        this.views[REQUEST_STATUS.SUCCESS] = this.other;
        this.views[REQUEST_STATUS.FAIL] = this.other;
        this.views[REQUEST_STATUS.ERROR] = this.other;
        this.views[REQUEST_STATUS.PENDING] = this.pending_view.bind(this);
        this.views[REQUEST_STATUS.NONE] = () => '';
    }

    render() {
        console.log(this.views[request_status.get_status(this.props)])
        console.log((request_status.get_name(this.props)==this.props.request_name && request_status.get_status(this.props)!=REQUEST_STATUS.NONE));
        return (<div className={`card-panel overlay ${(request_status.get_name(this.props)==this.props.request_name && request_status.get_status(this.props)!=REQUEST_STATUS.NONE)?'overlay-on':'overlay-off'}`}>
                {this.views[request_status.get_status(this.props)]()}
        </div>)
    }
    pending_view() {
        return (<div>
            <h4>{request_status.get_status(this.props)}</h4>
        </div>)
    }
    other() {
        return (<div>
            <h4>{request_status.get_status(this.props)}</h4>
            <p>{request_status.get_message(this.props)}</p>
        </div>)
    }
    // error_fail() {
    //     return (<div>
    //         <h4>{request_status.get_status(this.props)}</h4>
    //         <p>{request_status.get_message(this.props)}</p>
    //     </div>)
    // }

}

export default RequestStatusView;

// display_request_instance_status = () => {
//     const colour = {};
//     colour[REQUEST_STATUS.PENDING] = 'lime'
//     colour[REQUEST_STATUS.FAIL] = 'red'
//     colour[REQUEST_STATUS.SUCCESS] = 'green'

//     if ((request_status.get_name(this.props) == REQUEST_NAME.REQUEST_INSTANCE && request_status.get_status(this.props) != ''))
//         return (<div className={`card-panel ${(this.props.request_status.getIn(['status']) == REQUEST_STATUS.NONE) ? 'hidden' : 'visible'}  ${colour[this.props.request_status.getIn(['status'])]}`} >
//             {this.props.request_status.getIn(['status'])}
//         </div>);
// };