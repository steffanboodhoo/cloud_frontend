import React, {Component} from 'react';
import { Button, Header, Icon, Modal, Input } from 'semantic-ui-react';
import axios from 'axios';
export default class UpdatePayment extends Component{

	constructor(props){
		super(props);
		this.state = {
			modalOpen:false,
			...props
		};
	}

	handleOpen = () => this.setState({ modalOpen: true });
	handleClose = () => this.setState({ modalOpen: false });
	handleUpdate = (ev) =>{
		let paid = document.getElementById('input_paid').value;
		let data = {'pay_orderid':this.state.pay_orderid, 'paid':paid};
		axios.put('http://localhost:9000/etender_tender_payment',data)
		.then((resp)=>{
				console.log(resp);
				window.location.reload();
			});
		this.handleClose();
	}
	render(){
		return(
			<Modal trigger={<Button onClick={this.handleOpen}>Update Payment</Button>}
				open={this.state.modalOpen}
				onClose={this.handleClose}
				basic
				size='small'>
				<Header icon='archive' content={'Update Payment for '+this.state.company} />
				<Modal.Content>
					Amount Paid:<Input id='input_paid' placeholder={this.state.paid} />
				</Modal.Content>
				<Modal.Actions>
					<Button basic color='red' inverted onClick={this.handleClose}>
						<Icon name='remove' /> Cancel
					</Button>
					<Button color='green'  inverted onClick={this.handleUpdate}>
						<Icon name='checkmark' /> Update
					</Button>
				</Modal.Actions>
			</Modal>);
	}
}