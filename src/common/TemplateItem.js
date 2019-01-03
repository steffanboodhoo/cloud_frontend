import React,{Component} from 'react';

class TemplateItem extends Component { 
    constructor(props) {
        super(props);
    }

    render(){
        return(
                <div className="col s12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{this.props.display_name}</span>
                            <p>Memory: {this.props.memory}MB</p>
                            <p>Storage: {this.props.storage}GB</p>
                            <p>CPU count: {this.props.cpus}</p>
                            <p>Monthly Rate: ${this.props.monthly_rate}TT</p>
                        </div>
                        <div className="card-action">
                            { ('selectTemplate' in this.props)?
                                <a href="#" onClick={()=>{this.props.selectTemplate(this.props.template_id)}} >Purchase</a>:''
                            }
                            <ul className="collapsible card-action-custom">
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">filter_drama</i>Learn More</div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>                    
                </div>               

        )
    }

    componentDidMount(){
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, {});
    }
}
export default TemplateItem;