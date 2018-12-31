import React,{Component} from 'react';
import SelectImage from './SelectImage';
import PurchaseImage from './PurchaseImage';

import './create_instance.css';
class CreateInstance extends Component{
    constructor(props){
        super(props);
        this.state = {
            stage:0,
            views:[
                <SelectImage changeStage={this.changeStage}/>,
                <PurchaseImage changeStage={this.changeStage}/>
            ]
        }
    }

    render(){
        return(
            <div>
                {this.state.views[this.state.stage]}
            </div>
        );
    }

    changeStage = (newStage) => {
        this.setState({stage:newStage});
    }
}

export default CreateInstance;