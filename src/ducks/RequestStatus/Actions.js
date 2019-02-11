
export const UPDATE_REQUEST_STATUS = 'REQUEST_STATUS/UPDATE_REQUEST_STATUS';
export const UPDATE_REQUEST_MESSAGE = 'REQUEST_STATUS/UPDATE_REQUEST_MESSAGE';
export const types = {UPDATE_REQUEST_STATUS, UPDATE_REQUEST_MESSAGE};

export const update_request_status = (STATUS, NAME, message=null) => {
    console.log(STATUS)
    console.log(NAME)
    return {
        type: UPDATE_REQUEST_STATUS,
        payload: {status:STATUS, name:NAME, message}
    }
}

export const update_request_message = (message) => {
    return {
        type: UPDATE_REQUEST_MESSAGE,
        payload: {message}
    }
}

export const clear_request_status = () => {
    return {
        type: UPDATE_REQUEST_STATUS,
        payload: {status:'', name:'', message:''}
    }
}
//CONSTANTS
//REQUEST STATUS 
const NONE = 'REQUEST_STATUS/NONE';
const PENDING = 'REQUEST_STATUS/PENDING';
const FAIL = 'REQUEST_STATUS/FAIL';
const ERROR = 'REQUEST_STATUS/ERROR';
const SUCCESS = 'REQUEST_STATUS/SUCCESS';
export const REQUEST_STATUS = {NONE, PENDING, FAIL, ERROR, SUCCESS};

//REQUEST NAMES
const LOG_IN = 'REQUEST_STATUS/LOG_IN';
const LOGOUT = 'REQUEST_STATUS/LOGOUT';
export const REQUEST_NAME = {LOG_IN, LOGOUT};





