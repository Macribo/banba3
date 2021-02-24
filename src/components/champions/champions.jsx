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
		<div className= "container">
			<div className={this.props.tallyB === 0? "champion highlight" :"champion"}>Rógaire</div>
			<div className={this.props.tallyB === 1? "champion highlight" :"champion"}>Saoi</div>
			<div className={this.props.tallyB === 2? "champion highlight" :"champion"}>File</div>
			<div className={this.props.tallyB === 3? "champion highlight" :"champion"}>Draoi</div>
			<div className={this.props.tallyB === 4? "champion highlight" :"champion"}>Gallóglaċ</div>
			<div className={this.props.tallyB === 5? "champion highlight" :"champion"}>Bleachtaire</div>
			<div className={this.props.tallyB === 6? "champion highlight" :"champion"}>Diamhraí</div>
			<div className={this.props.tallyB === 7? "champion highlight" :"champion"}>Fiann</div>

		</div>
			<h1>Champions</h1>
			<h2>tallyB: {this.props.tallyB}</h2>
		</>)
	}

}