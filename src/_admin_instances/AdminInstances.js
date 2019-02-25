import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as instance_actions from '../ducks/Instance/Actions';
import InstanceItem from '../_cust_instances/InstanceItem';
class AdminInstances extends Component {
    render() {
        console.log(this.props)
        return (<div>
            <h1>Hello Admin</h1>
            <div className='row'>
                    {this.props.instance.getIn(['instances']).map( (elem, i) => {
                        return(
                            <div key={i} className='col s12 m6 l4'>
                                <InstanceItem instance={this.props.instance} data={elem} select_instance={this.handle_select_instance} />
                            </div>
                        )
                    })}
                </div>
        </div>);
    }

    componentDidMount(){
        this.props.instance_actions.get_instances();
    }

}
const mapStateToProps = (state) => ({ instance: state.Instance })
const mapActionsToProps = (dispatch) => ({ instance_actions: bindActionCreators(instance_actions, dispatch) })
export default connect(mapStateToProps, mapActionsToProps)(AdminInstances);