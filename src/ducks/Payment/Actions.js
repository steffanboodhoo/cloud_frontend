import Axios from "axios";

const RECIEVE_PAYMENTS = 'PAYMENTS/RECIEVE_PAYMENTS';

export const types = {RECIEVE_PAYMENTS};

export const get_payments = (fields=[], filters={}) => {
	return dispatch => {
		const params = {fields, filters};
		Axios.post('http://localhost:9000/payment/select/open',params).then( resp => {
			const enhanced_payments = resp.data.map( el => {
				el.machine_id = el.machine_id==null?'pending creation':el.machine_id;
				const date = (new Date(el.last_updated*1000)).toLocaleString();
				const search_str = ''+el.user_id+el.machine_id+status+date
				return { ...el
					,'date':date
					,'search_str':search_str
				}
			})
			dispatch(recieve_payments(enhanced_payments));
		});
	}
}

const recieve_payments = (payments) => {
	return {
		type:RECIEVE_PAYMENTS,
		payload:{payments}
	}
}