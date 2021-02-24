import React from 'react';

export class BtnB extends React.Component {

	constructor() {
		super();
		this.state = {

		}
	}
	render() {

		return (
				<button onClick={this.props.onClick}>B</button>		
		)
	}

}
