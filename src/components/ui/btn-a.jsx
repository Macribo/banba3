import React from 'react';

export class BtnA extends React.Component {

	constructor() {
		super();
		this.state = {

		}
	}
	render() {

		return (
				<button onClick={this.props.onClick}>A</button>		
		)
	}

}
