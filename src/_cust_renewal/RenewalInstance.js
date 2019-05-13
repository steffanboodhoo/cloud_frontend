import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreditCardPurchase from '../common/CreditCardPurchase';

class RenewalInstance extends Component {
    render() {
        return (
            <div className="row">
                <div className="col m6">
                    {(this.props.selected_instance != null ?
                        this.instance_details(this.props.selected_instance) : this.default_view())}
                </div>
                <div className="col m6">
                    {this.purchase_view()}
                </div>
            </div>)
    }

    instance_details = (instance) => {
        return (<div>
            {instance.machine_name}
        </div>)
    }
    default_view = () => (<div><h1>Please select a machine</h1></div>)
    purchase_view = () => {
        return (
            <div>
                <div className='row'>
                    <div className='row'>
                        <div className="input-field col s12">
                            <input id="months" type="number" defaultValue='1' className="validate" />
                            <label className='active' htmlFor="months">Number of months</label>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <CreditCardPurchase handle_submit={this.handle_submit} />
                </div>
            </div>
        )
    }

    handle_submit(payment_data) {
        const months = document.getElementById('months').value;
        console.log(payment_data)
    }
}

const mapStateToProps = (state) => ({});
const mapActionsToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapActionsToProps)(RenewalInstance);