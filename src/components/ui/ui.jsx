import React from 'react';

export class UI extends React.Component {

	constructor() {
		super();
		this.state = {

		}
	}
	render() {
		let incTallyA = this.props.incTallyA;
		return (
			<>
				<button id="btn-a" onClick={incTallyA}>A</button>
			</>
		)
	}

}