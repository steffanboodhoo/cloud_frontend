import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ImageItem from './ImageItem';
import * as image_actions from '../ducks/Image/Actions'; 
import * as image from '../ducks/Image/Selector';

class SelectInstance extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row">
                {image.get_images(this.props).map( ( el, i) => {
                    return (
                    <div key={i} className="col s12 m6">
                        <ImageItem {...el} selectImage={this.selectImage}/>
                    </div>);
                })}
            </div>
        );
    }

    componentDidMount(){
        this.props.image_actions.get_images();
    }

    selectImage = function(image_name, instance_type){
        this.props.image_actions.select_image(image_name, instance_type);
        this.props.changeStage(1);
    }.bind(this);
}

const mapStateToProps = (state) =>{
	return {image:state.Image};
};
const mapActionsToProps = (dispatch) =>{
	return {image_actions:bindActionCreators(image_actions,dispatch)};
};

export default connect(mapStateToProps,mapActionsToProps)(SelectInstance);