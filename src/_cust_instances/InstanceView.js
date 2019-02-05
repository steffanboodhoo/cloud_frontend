import React, {Component} from 'react';
import Chart from 'chart.js';
import Axios from 'axios';
import CustOperations from './CustOperations';
import CustBackupView from './CustBackupView';
class InstanceView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div>
            <div className='row'>
                <div className='col s12 z-depth-1' >
                <canvas id='usage_chart' width='90%' height='30%'></canvas>
                <p><b>To disable/enable a line click it's legend at the top</b>
                <br/>The chart shows percentage usage of CPU, Memory, DB(Storage) and FILE(Storage) over time.</p>
                </div>
            </div>

            <div className='row'>
                <div id='machine-details' className='col s4 z-depth-1'>
                    <h4>Details</h4>

                </div>

                <div id='cust-operations' className='col s4 z-depth-1'>
                    <CustOperations data={this.props.data}/>
                </div>

                <div id='backups-view' className='col s4 z-depth-1'>
                    <CustBackupView data={this.props.data}/>
                <div>

                    </div>
                </div>
            </div>
        </div>);
    }

    componentDidMount(){
        // this.setup_graph()
        this.init_graph_process()
    }

    init_graph_process = () => {
        let url = 'http://localhost:8000/hour_metric/select/open'
        const filters = {'instance_id': this.props.data.instance_id} 
        const params = {fields:[], filters};
        Axios.post(url, params).then( resp => {
            // return transform(resp.data)
            return resp.data
        }).then( data => {
            console.log(data)
            let cpu = { data:[], label:'CPU' }
            let memory = { data:[], label:'Memory' }
            let db = { data:[], label:'DB' }
            let files = { data:[], label:'Files' }
            let labels = []
            data.forEach( rec => {
                cpu.data.push(rec.cpu)
                memory.data.push(rec.memory)
                db.data.push(rec.db)
                files.data.push(rec.files)
                labels.push(rec.timestamp*1000)
            });
            data = {
                labels,
                datasets:[cpu, memory, db, files]
            }
            this.setup_graph(data)
        })
    }

    setup_graph = (data) => {
        const ctx = document.getElementById('usage_chart');
        const options = {
            tooltips:{ 
                intersect: false,
                axis:'x',
                mode:'index' //determines when to show tool tips, x is to show all that is on the x axis
            }
            ,scales:{
                yAxes:[{
                    scaleLabel:{display:true, labelString:'usage %'}
                }]
                ,xAxes:[{
                    scaleLabel:{display:true, labelString:'time'}
                    ,type:'time'
                }]
            }
        }

        const params = {
            type: 'line',
            data: data,
            options: options
        }

        let chart = new Chart(ctx,params)
    }

}

export default InstanceView;