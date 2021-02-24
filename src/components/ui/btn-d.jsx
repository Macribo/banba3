import React from 'react';

export class BtnD extends React.Component {

	constructor() {
		super();
		this.state = {

		}
	}
	render() {

		return (
				<button onClick={this.props.onClick}>d</button>		
		)
	}

}
