import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as app_actions from '../ducks/App/Actions';
import * as request_status_actions from '../ducks/RequestStatus/Actions';

import {REQUEST_NAME, REQUEST_STATUS} from '../ducks/RequestStatus/Actions';

class Login extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (<div>
            <h1>Login mother fucker</h1>
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
                        <button onClick={this.handle_login}>Submit</button>
                    </div>
                </form>
            <div className="row">
                {this.display_login_status()}
            </div>
        </div>)
    }

    handle_login = (ev) => {
        ev.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        this.props.app_actions.log_in({email, password}, 'customer', this.props.history.push)
    }

    display_login_status = () => {
        const colour = {};
        colour[REQUEST_STATUS.PENDING] = 'lime'
        colour[REQUEST_STATUS.FAIL] = 'red'
        colour[REQUEST_STATUS.SUCCESS] = 'green'

        if( (this.props.request_status.getIn(['name'])==REQUEST_NAME.LOG_IN && this.props.request_status.getIn(['status'])!='') )
            return (<div className={`card-panel ${(this.props.request_status.getIn(['status'])==REQUEST_STATUS.NONE)?'hidden':'visible'}  ${colour[this.props.request_status.getIn(['status'])]}` } >
            {this.props.request_status.getIn(['status'])}
        </div>);
    };
}

const mapStateToProps = (state) => ({ 
    app: state.App, 
    request_status: state.RequestStatus 
});

const mapActionsToProps = (dispatch) => ({ 
    app_actions: bindActionCreators(app_actions, dispatch),
    request_status_actions: bindActionCreators(request_status_actions, dispatch) 
})

export default connect(mapStateToProps, mapActionsToProps)(Login);