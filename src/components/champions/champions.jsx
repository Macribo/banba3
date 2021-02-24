import React from 'react';
import "./champions.css"
export class Champions extends React.Component {

	constructor() {
		super();
		this.state = {

		}
	}
	render() {

		return (<>
		<>
			<div className={this.props.tallyB === 0? "champion highlight" :"champion"}>Rógaire</div>
		</>
			<h1>Champions</h1>
			<h2>tallyB: {this.props.tallyB}</h2>
		</>)
	}

}