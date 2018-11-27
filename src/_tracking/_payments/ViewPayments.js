import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as payment_actions from '../../ducks/Payment/Actions';
import PaymentItem from './PaymentItem';

class ViewPayment extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            {this.props.payment.getIn(['payments']).map( (el, i) => {
                // return <div key={i}> {el.date}</div>
                return <PaymentItem key={i} payment={el}/>
            })}
            </div>
        );
    }

    componentDidMount(){
        this.props.payment_actions.get_payments();
    }
}

const MapStateToProps = (state) => {
    return {payment:state.Payment};
}
const MapActionsToProps = (dispatch) => {
    return {payment_actions:bindActionCreators(payment_actions, dispatch)};
}
export default connect(MapStateToProps,MapActionsToProps)(ViewPayment);