import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as app_actions from '../ducks/App/Actions';

class AdminLogin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <h1>Admin Portal</h1>
            <div className="row">
                <div className="input-field col s12">
                    <input id="ad_username" type="text" className="validate" />
                    <label htmlFor="ad_username">Active Directory Username</label>
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
        const ad_username = document.getElementById('ad_username').value;
        const password = document.getElementById('password').value;
        this.props.app_actions.log_in({ad_username, password}, 'admin')
    }
}

const mapStateToProps = (state) => ({ app: state.App });
const mapActionsToProps = (dispatch) => ({ app_actions: bindActionCreators(app_actions, dispatch) })

export default connect(mapStateToProps, mapActionsToProps)(AdminLogin);