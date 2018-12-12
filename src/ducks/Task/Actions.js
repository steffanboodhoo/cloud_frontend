import Axios from "axios";

const RECIEVE_OPERATIONS = 'OPERATIONS/RECIEVE_OPERATIONS';

export const types = {RECIEVE_OPERATIONS};

export const get_operations = () => {
    Axios.post('http://localhost:9000/')
}