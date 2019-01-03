import React,{Component} from 'react';


import './create_instance.css';
import SelectTemplate from './SelectTemplate';
import PurchaseInstance from '../_purchase/PurchaseInstance';

class CreateInstance extends Component{
    constructor(props){
        super(props);
        this.state = {
            stage:0,
            views:[
                <SelectTemplate changeStage={this.changeStage}/>,
                <PurchaseInstance changeStage={this.changeStage}/>
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