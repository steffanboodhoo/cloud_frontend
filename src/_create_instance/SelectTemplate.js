import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import TemplateItem from '../common/TemplateItem';
import * as template_actions from '../ducks/Template/Actions'; 
import * as template from '../ducks/Template/Selector';

class SelectTemplate extends Component{
    constructor(props){
        super(props);
        console.log(props.template)
    }

    render(){
        return(
            <div className="row">
                {template.get_templates(this.props).map( ( el, i) => {
                    return (
                    <div key={i} className="col s12 m6">
                        <TemplateItem {...el} selectTemplate={this.selectTemplate}/>
                    </div>);
                })}
            </div>
        );
    }

    componentDidMount(){
        this.props.template_actions.get_templates();
    }

    selectTemplate = function(template_id){
        this.props.template_actions.select_template(template_id);
        this.props.changeStage(1);
    }.bind(this);
}

const mapStateToProps = (state) =>{
	return {template:state.Template};
};
const mapActionsToProps = (dispatch) =>{
	return {template_actions:bindActionCreators(template_actions,dispatch)};
};

export default connect(mapStateToProps,mapActionsToProps)(SelectTemplate);