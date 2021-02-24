import React from 'react';

export class BtnU extends React.Component {

	constructor() {
		super();
		this.state = {

		}
	}
	render() {

		return (
				<button onClick={this.props.onClick}>U</button>		
		)
	}

}
