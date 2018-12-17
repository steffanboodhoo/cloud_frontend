import React, { Component } from 'react';

class SelectGroup extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
            <h4>Select VM Group</h4>
            <div className="input-field col s12">
                <select id='group_select'>
                    <option value="centos_etender_apps">Etender</option>
                    <option value="centos_test_servers">Centos 7</option>
                </select>
                <label>Instance Group</label>
            </div>
        </div>);
    };
}
export default SelectGroup;