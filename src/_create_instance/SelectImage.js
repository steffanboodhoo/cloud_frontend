import React,{Component} from 'react';
import * as image_actions from '../ducks/Image/Actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ImageItem from './ImageItem';
import * as image from '../ducks/Image/Selector';

class SelectInstance extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row">
                {image.get_images(this.props).map( ( el, i) => {
                    return <ImageItem key={i} {...el} selectImage={this.selectImage}/>
                })}
            </div>
        );
    }

    componentDidMount(){
        this.props.image_actions.get_images();
    }

    selectImage = (image_name, instance_type) => {
        this.props.image_actions.select_image(image_name, instance_type);
        // console.log(this.props.image)
        console.log(image.get_selected_image(this.props));
    }
}

const mapStateToProps = (state) =>{
	return {image:state.Image};
};
const mapActionsToProps = (dispatch) =>{
	return {image_actions:bindActionCreators(image_actions,dispatch)};
};

export default connect(mapStateToProps,mapActionsToProps)(SelectInstance);