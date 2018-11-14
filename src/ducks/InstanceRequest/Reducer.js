import {RECIEVE_BUNDLES} from './Actions.js';

const text = {
	RFP_REQUEST:'RFP_REQUEST', REVERSE_AUCTION:'REVERSE_AUCTION', FORWARD_AUCTION:'FORWARD_AUCTION',
	TENDER_AWARD:'TENDER_AWARD', CONTRACT_MANAGEMENT:'CONTRACT_MANAGEMENT'

	,MAPPING_COMPLETED:'MAPPING_COMPLETED', DNS_ENTRY_MADE:'DNS_ENTRY_MADE'

	,FILES_UPLOADED:'FILES_UPLOADED', LOGO_CHANGED:'LOGO_CHANGED', SITE_CONFIG_FILE_MODIFIED:'SITE_CONFIG_FILE_MODIFIED',
	USER_ACCOUNT_SETUP:'USER_ACCOUNT_SETUP', EMAIL_ACCOUNT_SETUP:'EMAIL_ACCOUNT_SETUP', PAYMENT_GATEWAY_SETUP:'PAYMENT_GATEWAY_SETUP'

	,SITE_AVAILABLE:'SITE_AVAILABLE', USER_FUNCTIONALITY_TESTED:'USER_FUNCTIONALITY_TESTED', ADMIN_FUNCTIONALITY_TESTED:'ADMIN_FUNCTIONALITY_TESTED'
};
const initialState = {	
	form:{
		inst_name:{elem:'input', type:'text', label:'Instance Name'},
		eten_admin_name:{elem:'input', type:'text', label:'Admin Name'},
		eten_admin_password:{elem:'input', type:'password', label:'Admin Password'},
		eten_admin_password_conf:{elem:'input', type:'password', label:'Confirm Admin Password'},
		submit:{elem:'button', label:'Submit'}
	},
	bundles:[]
};
/*document:{
		phases:['CREATE','INFRASTRUCTURE','APPLICATIONS','ADMINISTRATOR','FINISHED'],
		CREATE:{
			company_name:{elem:'input', type:'text', label:'Company Name'},
			date_submitted:{elem:'input', type:'date', label:'Date Submitted'},
			functionality:{elem:'checkbox', label:'Functionality', values:[text.RFP_REQUEST, text.REVERSE_AUCTION, text.FORWARD_AUCTION, text.FORWARD_AUCTION, text.TENDER_AWARD, text.CONTRACT_MANAGEMENT]},
			admin_username:{elem:'select', label:'test', values:[text.RFP_REQUEST, text.REVERSE_AUCTION, text.FORWARD_AUCTION, text.FORWARD_AUCTION, text.TENDER_AWARD, text.CONTRACT_MANAGEMENT]}
		},
	}*/

export default function(state = initialState, action){
	switch(action.type){
	case RECIEVE_BUNDLES:{
		return {...state,
			bundles:action.payload.data};
	}
	default:
		return {...state};
	}

}