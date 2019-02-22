import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as payment_actions from '../../ducks/Payment/Actions';
import PaymentItem from './PaymentItem';

class ViewPayment extends Component{
    constructor(props){
        super(props);
        this.state = {
            payments: []
        }
    }

    render(){
        return(
            <div>
                <input type='text' onChange={this.handle_on_change} placeholder='Enter Order number, machine name or date'/>
                <div className='row'>
                    <div className='col s4'>Order Number</div>
                    <div className='col ss'>Status</div>
                    <div className='col s2'>Amount</div>
                    <div className='col s2'>Machine Name</div>
                    <div className='col s2'>Date</div>
                </div>
            {this.state.payments.map( (el, i) => {
                // return <div key={i}> {el.date}</div>
                return <PaymentItem key={i} payment={el}/>
            })}
            </div>
        );
    }
    handle_on_change = (ev) => {
        let payments = this.props.payment.getIn(['payments']);
        const search = ev.target.value;
        if(search != '')
            payments = payments.filter( el => el.search_str.includes(search))
        this.setState({payments})
    }

    componentDidMount(){
        if(this.props.payment.getIn(['payments']).length==0){
            this.props.payment_actions.get_payments()
        }else{
            this.setState({payments:this.props.payment.getIn(['payments'])})
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({payments:nextProps.payment.getIn(['payments'])})
    }
}

const MapStateToProps = (state) => {
    return {payment:state.Payment};
}
const MapActionsToProps = (dispatch) => {
    return {payment_actions:bindActionCreators(payment_actions, dispatch)};
}
export default connect(MapStateToProps,MapActionsToProps)(ViewPayment);