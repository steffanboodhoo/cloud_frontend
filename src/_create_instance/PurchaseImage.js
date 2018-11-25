import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import ImageItem from './ImageItem';
import * as image_actions from '../ducks/Image/Actions'; 
import * as image from '../ducks/Image/Selector';

class PurchaseImage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return( 
            <div className="row">
                <div className="col m6">
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
                <div className="col m6">
                    <div></div>
                    <ImageItem {...image.get_selected_image(this.props)}/>
                </div>
                
            </div>
        );
    }

    componentDidMount(){
        let elem = document.querySelectorAll('.datepicker')[0];
        const date_picker_instance = M.Datepicker.init(elem,{});

        elem = document.querySelectorAll('select')[0];
        const select_instance = M.FormSelect.init(elem,{});
        console.log(image.get_selected_image(this.props));
    }
}
const mapStateToProps = (state) =>{
	return {image:state.Image};
};
const mapActionsToProps = (dispatch) =>{
	return {image_actions:bindActionCreators(image_actions,dispatch)};
};

export default connect(mapStateToProps,mapActionsToProps)(PurchaseImage);