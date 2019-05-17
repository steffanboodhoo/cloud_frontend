import React,{Component} from 'react';
import TemplateItem from '../common/TemplateItem';

class SelectTemplate extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row">
                {this.props.templates.map( ( el, i) => {
                    return (
                    <div key={i} className="col s12 m6">
                        <TemplateItem template={el} select_template={this.props.handle_select_template}/>
                    </div>);
                })}
            </div>
        );
    }
    select_template(template){
        this.props.handle_select_template(template);
    }
}


export default SelectTemplate;