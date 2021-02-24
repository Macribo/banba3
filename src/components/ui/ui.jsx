import React from 'react';

export class UI extends React.Component {

	constructor() {
		super();
		this.state = {

		}
	}
	render() {
		let incTallyA = this.props.incTallyA;
		let incTallyB = this.props.incTallyB;
		return (
			<>
				<button id="btn-a" onClick={this.props.onClick}>A</button>
			</>
		)
	}

}