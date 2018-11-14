import React from 'react';
import ReactDom from 'react-dom';

import {anime} from '../niche/animated_seg.js';
import '../niche/TweenLite.min.js';
import '../niche/EasePack.min.js';
import '../niche/animated_seg.css';

export default class Animated extends React.Component{

	constructor(){
		super();
	}

	

	render(){
		console.log(this.props)
		return(       
			<div id="anime-container" className="anime-container">
				<canvas id="demo-canvas"></canvas>             
			</div>
			);
	}


	componentDidMount(){   
			console.log(this.props.height_percentage);
		anime(20);
	}


}