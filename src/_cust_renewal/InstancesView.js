import React, { Component } from 'react';

class InstancesView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            original_instances: [],
            instances: []
        }
    }

    render() {
        return (
            <div >
                <div className='row'>
                    <input type='text' onChange={this.handle_on_change.bind(this)} />
                </div>
                <div className='row'>
                    {this.state.instances.map((el, i) => {
                        return (this.instanceItem(el,i))
                    })}
                </div>
            </div>
        )
    }

    handle_on_change(ev) {
        console.log(ev.target.value)
        let filtered_instances = this.state.original_instances.filter(el => {
            return el.machine_name.includes(ev.target.value)
        })

        this.setState({ instances: filtered_instances })

    }
    componentDidMount() {
        const instances = this.props.instances.map(el => {
            el.expiration_date = (new Date(el.expiration_date * 1000)).toLocaleString();
            return el
        })
        const original_instances = instances
        this.setState({ instances, original_instances })
    }

    instanceItem(el, i) {
        const id = this.props.selected_instance!=null?this.props.selected_instance.instance_id:-1;
        return (<div className={`row z-depth-1 waves-effect hoverable ${el.instance_id==id?'selected':''}`} key={i} onClick={() => { this.props.handle_select_instance(el) }}>
            <div className='col s3'>{el.machine_name} </div>
            <div className='col s3'> {el.status} </div>
            <div className='col s6'>expiration: {el.expiration_date} </div>
        </div>)
    }
}

export default InstancesView;