import React, { Component } from 'react';
import CreditCardPurchase from '../common/CreditCardPurchase';

class InstanceRenewal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                    <CreditCardPurchase handle_submit={this.handle_form_submit.bind(this)} />
                </div>
            </div>
        )
    }

    handle_form_submit(payment_data) {
        const months = document.getElementById('months').value;
        let request = {months}
        this.props.handle_submit_payment( request, payment_data )
    }
}
export default InstanceRenewal;