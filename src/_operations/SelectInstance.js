import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as instance_actions from '../ducks/Instance/Actions';
class SelectInstance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: -1
        }
    }

    render() {
        return (<div>
            <h4>Select Instance</h4>
            <div className="input-field col s12" id='task_instance_select'>
                <div className='row'>{this.props.instance.getIn(['instances']).map((el, i) => {
                    return this.create_item(i,el);
                })}</div>
            </div>
        </div>);
    }

    create_item = (i, el) => {
        // z-depth-x is the shadow level, the foll statement means set shadow 4 if selected else 2
        return (<div key={i} className={`z-depth-${this.state.selected==i?4:2} instance_item col s4 l3`} index={i} onClick={this.handle_select_intance}>
            <i className="large material-icons">computer</i>
            <p><b>Machine Name</b>: {el.machine_name}
                <br /><b>Status</b>: {el.status}</p>
        </div>)
    }

    componentDidMount() {
        this.props.instance_actions.get_instances();
    }

    handle_select_intance = (ev) =>{
        const index = ev.target.closest("div").getAttribute('index');
        this.setState({selected:index});
        const instance = this.props.instance.getIn(['instances'])[index];
        this.props.handle_select_target(instance);
    }
}

const mapStateToProps = (state) => ({ instance: state.Instance });
const mapActionsToProps = (dispatch) => ({ instance_actions: bindActionCreators(instance_actions, dispatch) });

export default connect(mapStateToProps, mapActionsToProps)(SelectInstance);