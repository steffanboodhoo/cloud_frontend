import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as instance_actions from '../ducks/Instance/Actions';
import * as socket_actions from '../ducks/Socket/Actions';

class ViewInstances extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props)
        return(<div>
            
            {this.props.instance.getIn(['instances']).map( (elem, i) => {
                return (<div key={i}>
                    elem
                </div>);
            })
            }
        </div>);
    }

    componentDidMount(){
        this.props.instance_actions.get_instances();
    }
}

const mapStateToProps = (state) => ({ instance: state.Instance });
const mapActionsToProps = (dispatch) => { 
    return {instance_actions:bindActionCreators(instance_actions, dispatch),
    socket:bindActionCreators(socket_actions, dispatch)}
};

export default connect(mapStateToProps, mapActionsToProps)(ViewInstances);