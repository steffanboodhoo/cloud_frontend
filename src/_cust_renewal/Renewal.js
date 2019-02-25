import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RenewalInstance from './RenewalInstance';
import * as instance_actions from '../ducks/Instance/Actions';
// import * as instance_actions from '../ducks/Instance/Actions';
class Renewal extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected_instance : null
        }
    }
    render() {
        console.log(this.props.instance.getIn(['instances']))
        return (<div>
            <div className='col s3'>
                {this.props.instance.getIn(['instances']).map((el, i) => {
                    return (<div className='row' key={i} onClick={()=>{this.select_instance(el)}}>
                        {el.machine_name}
                    </div>)
                })}
            </div>
            <div className='col s9'>
                <RenewalInstance selected_instance={this.state.selected_instance}/>
            </div>
        </div>);
    }
    select_instance = (el) => {
        this.setState({selected_instance:el})
        // console.log(this.state)
    }

    componentDidMount() {
        if (this.props.instance.getIn(['instances']).length == 0)
            instance_actions.get_instances();

    }
}

const mapStateToProps = (state) => ({ instance: state.Instance })
const mapActionsToProps = (dispatch) => ({ instance_actions: bindActionCreators(instance_actions, dispatch) })
export default connect(mapStateToProps,mapActionsToProps)(Renewal);