import React, { Component } from 'react';

class SelectGroup extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
            <h4>Select VM Group</h4>
            <div className="input-field col s12">
                <select id='task_group_select' onChange={this.handle_select_group}>
                    <option value="centos_etender_apps">Etender</option>
                    <option value="centos_test_servers">Centos 7</option>
                </select>
                <label>Instance Group</label>
            </div>
        </div>);
    };
    componentDidMount(){
        this.props.handle_select_target( document.getElementById('task_group_select').value )
        let elem = document.querySelectorAll('select')[0];
        const select_instance = M.FormSelect.init(elem,{});
    }

    handle_select_group = (ev) => {
        const group = document.getElementById('task_group_select').value;
        this.props.handle_select_target(group);
    }
}
export default SelectGroup;