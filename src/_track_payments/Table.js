import React, {Component} from 'react';
import TRow from './TRow.js';

const Table = (props) => {
	return props.data.map( row => {
		return <TRow {...row}/>;
	});
};

export default Table;