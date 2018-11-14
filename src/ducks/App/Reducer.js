import {AUTHENTICATE} from './Actions';
let initialState = {
	user:{
		authenticated:false,
		user_type: undefined,
		err:false,
		message:null
	},
	admin_form:{
		username:{elem:'input', type:'text', label:'Username'},
		password:{elem:'input', type:'password', label:'Password'},
		submit:{elem:'button', label:'Login'}
	},
	customer_form:{
		email:{elem:'input', type:'text', label:'Email'},
		password:{elem:'input', type:'password', label:'Password'},
		submit:{elem:'button', label:'Login'}
	}
};

export default function (state = initialState, action){
	switch(action.type){
	case(AUTHENTICATE):{
		let new_state = {...state};
		new_state.user.message = action.payload.message;
		new_state.user.authenticated = action.payload.status=='success'?true:false;
		new_state.user.err = !(new_state.user.message==null);
		return new_state;
	}
	default:
		return{...state};
	}
}