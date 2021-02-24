import React from 'react';

export class UI extends React.Component {

	constructor() {
		super();
		this.state = {

		}
	}
	render() {
		let incTallyA = this.props.incTallyA;
		let decTallyA = this.props.decTallyA;
		let incTallyB = this.props.incTallyB;
		let decTallyB = this.props.decTallyB;
		let incTallyX = this.props.incTallyA;
		let decTallyX = this.props.decTallyA;
		let incTallyY = this.props.incTallyY;
		let decTallyY = this.props.decTallyY;
		return (
			<>
				<button id="dir-left" onClick={decTallyB}>left</button>
				<button id="dir-right" onClick={incTallyB}>right</button>
			</>
		)
	}

}