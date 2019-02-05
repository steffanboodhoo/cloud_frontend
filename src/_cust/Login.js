import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as app_actions from '../ducks/App/Actions';

class Login extends Component {
    constructor({ app_actions, ...props }) {
        super(props);
    }

    render() {
        return (<div>
            <h1>Login mother fucker</h1>
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
        </div>)
    }

}

const mapStateToProps = (state) => ({ app: state.App });
const mapActionsToProps = (dispatch) => ({ app_actions: bindActionCreators(app_actions, dispatch) })

export default connect(mapStateToProps, mapActionsToProps)(Login);