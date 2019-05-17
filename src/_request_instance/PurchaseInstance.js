import React, { Component } from 'react';;

import * as request_status from '../ducks/RequestStatus/Selectors';
import { REQUEST_NAME, REQUEST_STATUS } from '../ducks/RequestStatus/Actions';

import TemplateItem from '../common/TemplateItem';
import CreditCardPurchase from '../common/CreditCardPurchase';
import '../_cust/home.css';



class PurchaseTemplate extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.selected_template)
    }

    render() {
        return (

            <div>
                <div className='row'>
                    <div className='col m6'>
                    <div className='row'>
                            <div className='input-field col s12'>
                                <input id='months' type='number' defaultValue='1' className='validate' />
                                <label className='active' htmlFor="months">Number of months</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s12'>
                                <input id='nickname' type='text' defaultValue='' className='validate' />
                                <label className='active' htmlFor="nickname">Nickname</label>
                            </div>
                        </div>

                        <div className='row'>
                            <CreditCardPurchase handle_submit={this.handle_form_submit.bind(this)} />
                        </div>
                    </div>

                    <div className='col m6'>
                        <TemplateItem template={this.props.selected_template} />
                    </div>

                </div>


                <div className='row'>
                    {this.display_request_instance_status()}
                </div>
            </div>
        );
    }

    handle_form_submit = (payment_data) => {
        const months = document.getElementById('months').value;
        const nickname = document.getElementById('nickname').value;
        const request_data = { months, nickname }
        this.props.handle_submit_request(request_data, payment_data);
    }

    display_request_instance_status = () => {
        const colour = {};
        colour[REQUEST_STATUS.PENDING] = 'lime'
        colour[REQUEST_STATUS.FAIL] = 'red'
        colour[REQUEST_STATUS.SUCCESS] = 'green'

        if ((request_status.get_name(this.props) == REQUEST_NAME.REQUEST_INSTANCE && request_status.get_status(this.props) != ''))
            return (<div className={`card-panel ${(this.props.request_status.getIn(['status']) == REQUEST_STATUS.NONE) ? 'hidden' : 'visible'}  ${colour[this.props.request_status.getIn(['status'])]}`} >
                {this.props.request_status.getIn(['status'])}
            </div>);
    };
}

export default PurchaseTemplate;