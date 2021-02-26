import React from 'react';

export class BtnB extends React.Component {

	constructor() {
		super();
		this.state = {

		}
	}
	render() {

		return (
				<button id="btn-b" onClick={this.props.onClick} onTouchStart={this.props.onTouchStart} onTouchEnd={this.props.onTouchEnd}>B</button>		
		)
	}

}
