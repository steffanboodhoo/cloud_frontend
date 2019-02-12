import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import TemplateItem from '../common/TemplateItem';
import * as template_actions from '../ducks/Template/Actions'; 
import * as template from '../ducks/Template/Selector';

class PurchaseTemplate extends Component{
    constructor(props){
        super(props);
        this.state = {
            purchase_type:this.props.purchase_type
        }
        if(this.state.purchase_type=='NEW')
            this.state['template_id'] = this.props.template_id
        else if(this.state.purchase_type=='RENEW')
            this.state['instance_id'] = this.props.instance_id
    }

    render(){
        return( 
            <div className="row">
                <form>
                <div className="col m6">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="card_number" type="text" className="validate"/>
                            <label htmlFor="card_number">Card Number</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="card_exp_date" type="text" className="datepicker"/>
                            <label htmlFor="card_exp_date">Card Expiry Date</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input id="card_cvv" type="number" className="validate"/>
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
                        <button className="waves-effect waves-light btn-large" onClick={handle_purchase_submit}><i className="material-icons right">send</i>purchase</button>
                    </div>
                </div>

                <div className="col m6">
                    <TemplateItem {...template.get_selected_template(this.props)}/>
                </div>
                </form>                
            </div>
        );
    }

    componentDidMount(){
        let elem = document.querySelectorAll('.datepicker')[0];
        const date_picker_instance = M.Datepicker.init(elem,{});

        elem = document.querySelectorAll('select')[0];
        const select_instance = M.FormSelect.init(elem,{});
    }
}
const mapStateToProps = (state) =>{
	return {template:state.Template};
};
const mapActionsToProps = (dispatch) =>{
	return {template_actions:bindActionCreators(template_actions,dispatch)};
};
const handle_purchase_submit = (ev) => {
    ev.preventDefault();
    const card_number = document.getElementById('card_number').value
    const card_exp_date = document.getElementById('card_exp_date').value
    const card_cvv = document.getElementById('card_cvv').value
    const currency = document.getElementById('currency').value
    const params = {card_number, card_exp_date, card_cvv, currency}
    console.log(params);
}
export default connect(mapStateToProps,mapActionsToProps)(PurchaseTemplate);