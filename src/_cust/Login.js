import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as app_actions from '../ducks/App/Actions';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <h1>Login mother fucker</h1>
            <div className="row">
                <div className="input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="password" type="text" className="validate" />
                    <label htmlFor="password">Password</label>
                </div>
            </div>
            <button onClick={this.handle_login}>Submit</button>
        </div>)
    }

    handle_login = () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        this.props.app_actions.log_in({email, password}, 'customer')
    }
}

const mapStateToProps = (state) => ({ app: state.App });
const mapActionsToProps = (dispatch) => ({ app_actions: bindActionCreators(app_actions, dispatch) })

export default connect(mapStateToProps, mapActionsToProps)(Login);