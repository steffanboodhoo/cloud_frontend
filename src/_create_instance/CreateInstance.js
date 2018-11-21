import React,{Component} from 'react';
import SelectImage from './SelectImage';
class CreateInstance extends Component{
    constructor(props){
        super(props);
        this.state = {
            stage:0,
            views:[
                <SelectImage/>
            ]
        }
    }

    render(){
        return(
            <div>
                {this.state.views[0]}
            </div>
        );
    }
}

export default CreateInstance;