import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as app_actions from '../ducks/App/Actions';
import { REQUEST_NAME, REQUEST_STATUS } from '../ducks/RequestStatus/Actions';

class Register extends Component {
    state = {
        input_error: null,
        input_error_message: null
    }

    render() {
        return (<div>
            <h2>Register</h2>
            <form>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password_verify" type="password" className="validate" />
                        <label htmlFor="password">Confirm Password</label>
                    </div>
                </div>
                <div className="row">
                    <button onClick={this.handle_register}>Submit</button>
                </div>
            </form>
            <div className="row">
                {this.display_input_error()}
                {this.display_register_status()}
            </div>
        </div>)
    }

    handle_register = (ev) => {
        ev.preventDefault();
        const password = document.getElementById('password').value;
        const password_verify = document.getElementById('password_verify').value;
        const email = document.getElementById('email').value;
        // if ( check_password(password, password_verify) && check_email(email) )
        this.setState({input_error:null})
        let error = this.check_email(email) || this.check_password(password, password_verify);
        if (error)
            this.setState({ input_error: true, input_error_message: error })
        else
            this.props.app_actions.register({ password, email });
    }
    display_register_status = () => {
        const colour = {};
        colour[REQUEST_STATUS.PENDING] = 'lime'
        colour[REQUEST_STATUS.FAIL] = 'red'
        colour[REQUEST_STATUS.SUCCESS] = 'green'

        if ((this.props.request_status.getIn(['name']) == REQUEST_NAME.REGISTER && this.props.request_status.getIn(['status']) != ''))
            return (<div className={`card-panel ${(this.props.request_status.getIn(['status']) == REQUEST_STATUS.NONE) ? 'hidden' : 'visible'}  ${colour[this.props.request_status.getIn(['status'])]}`} >
                {this.props.request_status.getIn(['status'])}
            </div>);
    }

    display_input_error = () => {
        console.log(this.state)
        
            return (<div className={`${this.state.input_error? 'visible':'hidden'} card-panel red`}>
                {this.state.input_error_message}
            </div>)
        
    }

    check_password = (password, password_verify) => {
        if (password != password_verify)
            return 'Password does not match';
        if (password == '')
            return 'Please enter password'
        return ''
    }
    check_email = (email) => {
        if (!email.includes('@'))
            return 'invalid email';
        return ''
    }
}
const mapStateToProps = (state) => ({ app: state.App, request_status: state.RequestStatus });
const mapActionsToProps = (dispatch) => ({ app_actions: bindActionCreators(app_actions, dispatch) });
export default connect(mapStateToProps, mapActionsToProps)(Register);