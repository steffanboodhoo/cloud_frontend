import React, {Component} from 'react';
import {Card, Button} from 'semantic-ui-react';
import UpdatePayment from './UpdatePayment.js';

const TROW = (props) =>{
	console.log(props);
	return(
		<Card fluid={true}>
			<Card.Content>
				<Card.Header>{props.company}</Card.Header>
				<Card.Description>
					<p>Amount owed:${props.amt_owed}.00</p>
					<p>Amount recieved:${props.amt_rec}</p>
					<p>Amount paid:${props.paid}</p>
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				
				Date of payment:{ (new Date(props.date*1000)).toDateString() } <br></br>
				Receipt number:{ props.receipt} <br></br>
				Vendor payment order id:{props.pay_orderid}
			</Card.Content>
			<Card.Content>
				 <UpdatePayment {...props}/>
			</Card.Content>				
		</Card>
	);
};

export default TROW;