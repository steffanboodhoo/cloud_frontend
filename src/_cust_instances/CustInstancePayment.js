import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as payment_actions from '../ducks/Payment/Actions';

class CustInstancePayment extends Component {
    // state = {
    //     payments : 
    // }
    render() {
        // console.log(this.state.payments)
        return (<div>
            <h4>Payments</h4>
            {this.props.payment.getIn(['payments']).filter(el => el.instance_id == this.props.data.instance_id).map((el, i) => {
                return (<div key={i} className='row'>
                    <div className='col s4'>{el.machine_name}</div>
                    <div className='col s3'>${el.amount}</div>
                    <div className='col s5'>{el.date}</div>
                </div>)
            })}
        </div>)
    }

    componentDidMount() {
        console.log(this.props.payment.getIn(['payments']).length)
        if (this.props.payment.getIn(['payments']).length == 0) {
            console.log('%ccall payment actions', 'colour:red;')
            this.props.payment_actions.get_payments();
        } else {
            console.log(this.props.payment.getIn(['payments']))
        }
    }
}

const mapStateToProps = (state) => (
    {
        request_state: state.RequestStatus,
        payment: state.Payment
    })
const mapActionsToProps = (dispatch) => ({ payment_actions: bindActionCreators(payment_actions, dispatch) })
export default connect(mapStateToProps, mapActionsToProps)(CustInstancePayment);