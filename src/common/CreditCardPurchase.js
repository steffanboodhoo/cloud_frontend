import React, { Component } from 'react';


class CreditCardPurchase extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="card_number" type="text" className="validate" />
                        <label htmlFor="card_number">Card Number</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="card_exp_date" type="text" className="datepicker" />
                        <label htmlFor="card_exp_date">Card Expiry Date</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input id="card_cvv" type="number" className="validate" />
                        <label htmlFor="card_cvv">Card CVV</label>
                    </div>

                    <div className="input-field col s6">
                        <select id='currency'>
                            <option value="840" >USD</option>
                            <option value="780">TTD</option>
                            <option value="124" >CAD</option>
                            <option value="978" >EUR</option>
                        </select>
                        <label>Currency</label>
                    </div>
                </div>

                <div className='row'>
                    <button className="waves-effect waves-light btn-large" onClick={this.submit.bind(this)}><i className="material-icons right">send</i>purchase</button>
                </div>
            </div>
        )
    }

    submit(ev){
        ev.preventDefault();
        const card_number = document.getElementById('card_number').value
        const date_obj = new Date(document.getElementById('card_exp_date').value)
        const month = date_obj.getMonth()+1, year = date_obj.getFullYear()%100;
        const card_exp_date = `${month>9?month:('0'+month)}${year}` //MMYY
        const card_cvv = document.getElementById('card_cvv').value
        const currency = document.getElementById('currency').value
        const payment_data = {card_number, card_exp_date, card_cvv, currency}
        this.props.handle_submit(payment_data);
    }

    componentDidMount() {
        let elem = document.querySelectorAll('.datepicker')[0];
        const date_picker_instance = M.Datepicker.init(elem,{});

        elem = document.querySelectorAll('select')[0];
        const select_instance = M.FormSelect.init(elem,{});
    }

}

export default CreditCardPurchase;