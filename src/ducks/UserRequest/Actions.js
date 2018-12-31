
const SET_MESSAGE = 'USER_REQUEST/SET_MESSAGE';
const SET_REQUEST_STAGE = 'USER_REQUEST/SET_RESPONSE_STATUS';
const types = {SET_MESSAGE, SET_RESPONSE_STATUS};

const NO_REQUEST = 'NO_REQUEST'; // no request is in progress
const PENDING = 'PENDING'; // a request was sent
const RESPONSE = 'RESPONSE'; // we recieved a response

const REQUEST_STAGE = {}

const set_message = (message, http_status_code) => {
    return {
        type:SET_MESSAGE,
        payload:{message, http_status_code}
    }
}

const set_stage = (stage) => {
    return {
        type:SET_REQUEST_STAGE,
        payload:{stage}
    }
}