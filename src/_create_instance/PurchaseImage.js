import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ImageItem from './ImageItem';

class PurchaseImage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return( 
            <div className="row">
                <div className="col s6">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="card_number" type="text" className="validate"/>
                        <label htmlFor="card_number">Card number</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="card_exp_date" type="text" className="datepicker"/>
                        <label htmlFor="card_exp_date">Expiry date</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="card_cvv" type="number" className="validate"/>
                        <label htmlFor="card_cvv">Card CVV</label>
                    </div>

                    <div className="input-field col s6">
                        <select>
                        {/* <option value="" disabled selected>Choose your option</option> */}
                        <option value="840" >USD</option>
                        <option value="780">TTD</option>
                        <option value="124" >CAD</option>
                        <option value="978" >EUR</option>
                        </select>
                        <label>Currency</label>
                    </div>
                </div>
                </div>
                <div className="col s6">

                </div>
                
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
export default PurchaseImage;