import React from 'react';

export class BtnR extends React.Component {

	constructor() {
		super();
		this.state = {

		}
	}
	render() {

		return (
				<button onClick={this.props.onClick}>R</button>		
		)
	}

}
