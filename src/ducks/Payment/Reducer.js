import {types} from './Actions';
let initial_state = {
	'current_instance':undefined,
	payment_request_status:'',
	form:{
		'card_cvv':{elem:'input', type:'number', label:'Card CVV'},
		'card_number':{elem:'input', type:'number', label:'Card number'},
		'issue_number':{elem:'input', type:'number', label:'Issue Number'},
		'start_date':{elem:'input', type:'date', label:'Start Date'},
		'card_exp_date':{elem:'input', type:'date', label:'Card Expiry date'},
		'currency':{elem:'select', label:'Currency', values:[]},
		'submit':{elem:'button', label:'Pay'}
	},
	currency_map:{
		'TTD':780,
		'USD':840
	}
};
initial_state.form.currency.values = Object.keys(initial_state.currency_map);

export default function Payment (state = initial_state, action){
	switch(action.type){
	case(types.POST_PAY):
		return {...state};
/*	case CHANGE_INSTANCE:
		return {...state, current_instance:action.payload.instance_id};*/
	default:
		return {...state};
	}
}