import React from 'react';

export class BtnL extends React.Component {

	constructor() {
		super();
		this.state = {

		}
	}
	render() {

		return (
				<button onClick={this.props.onClick}>L</button>		
		)
	}

}
