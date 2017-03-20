import React, { Component } from 'react';
import { render } from 'react-dom';
// import { Line } from 'rc-progress';

import TreeProgressReq from "./treeProgressReq.jsx";


class TreeProgress extends Component {
	// constructor(){
	// 	super();
	// 	this.state = {
	// 		preq: "N/A", 
	// 		currStyle: null
	// 	};
	// }

	clicked(e){
		console.log("treeProgress clicked");
		console.log(this.props.programReq);
	}
	
	render() {
		return 	<div onClick={this.clicked.bind(this)}>
					<h3 className="search_result_name">"PROGRESS BAR"</h3>
					<TreeProgressReq />
				</div>;
	}
}


export default TreeProgress;