
export const get_name = ({request_status}) => {
    return request_status.getIn(['name']);
}

export const get_status = ({request_status}) => {
    return request_status.getIn(['status']);
}

export const get_message = ({request_status}) => {
    return request_status.getIn(['message']);
}