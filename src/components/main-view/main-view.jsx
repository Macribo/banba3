import React from 'react';
import {Champions} from '../champions/champions'
import { BrowserRouter as Router, Route, } from "react-router-dom";

export default class MainView extends React.Component {

	constructor() {
		super();
		this.state = {

			tallyA: 1,
			tallyB: 0,
			tallyX: 0,
			tallyY: 0,

		}
	}

	render() {

		return (
			<Router>
				<Route exact path="/">
					<>
						<h1>Greetings from main</h1>
						<h2>tallyA: {this.state.tallyA}</h2>
						<h2>tallyB: {this.state.tallyB}</h2>
						<h2>tallyX: {this.state.tallyX}</h2>
						<h2>tallyY: {this.state.tallyY}</h2>
					</></Route>

				<Route exact path="/champions">
					<>
						<Champions />
					</></Route></Router>
		)
	}
}