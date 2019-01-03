import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as instance_actions from '../ducks/Instance/Actions';

class ViewInstances extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div>
            Nothing
        </div>);
    }
}

const MapStateToProps = (state) => {({instances:state.instance})};
const MapActionsToProps = (dispatch) => {};

export default ViewInstances;