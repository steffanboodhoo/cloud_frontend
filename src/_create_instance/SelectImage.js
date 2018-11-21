import React,{Component} from 'react';
import * as image_actions from '../ducks/Image/Actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class SelectInstance extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Test</h1>
            </div>
        );
    }

    componentDidMount(){
        this.props.image_actions.get_images();
    }
}
const mapStateToProps = (state) =>{
	return {image:state.Image};
};
const mapActionsToProps = (dispatch) =>{
	return {image_actions:bindActionCreators(image_actions,dispatch)};
};

export default connect(mapStateToProps,mapActionsToProps)(SelectInstance);