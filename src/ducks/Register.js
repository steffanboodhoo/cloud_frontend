import {CREATE_NEW_USER} from '../Actions/actions';

const initialState = {
	credentials:{
		email:'',
		password:''
	},
	form:{
		first_name:{elem:'input', type:'text', label:'First Name'},
		last_name:{elem:'input', type:'text', label:'Last Name'},
		email:{elem:'input', type:'text', label:'Email'},
		password:{elem:'input', type:'password', label:'Password'},
		confirm_password:{elem:'input', type:'password', label:'Confirm Password'},
		submit:{elem:'button', label:'Register'}
	}
};

export default  function(state = initialState, action){
	switch(action.type){
	case 'TEST':
		return {...state};
	
	default:
		return{...state};
	}
};
