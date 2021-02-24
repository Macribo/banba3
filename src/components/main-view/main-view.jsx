import React from 'react';
import {Champions} from '../champions/champions'
import {Provinces} from '../provinces/provinces'
import {Counties} from '../counties/counties'
import {UI} from '../ui/ui'

import { BrowserRouter as Router, Route, } from "react-router-dom";

export default class MainView extends React.Component {

	constructor() {
		super();
		this.state = {

			tallyA: 0,
			tallyB: 0,
			tallyX: 0,
			tallyY: 0,

		}
	}

	incTallyA = ()=>{
		this.setState({tallyA: this.state.tallyA +=1})
		console.log('incrementing tally A: ' +this.state.tallyA)
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
					
						<UI incTallyA = {this.incTallyA}/>
					</>
					
					</Route>

				<Route exact path="/champions">
					<>
						<Champions />
						<h2>tallyA: {this.state.tallyA}</h2>

					</></Route>
					
					
				<Route exact path="/provinces">
					<>
						<Provinces />
						<h2>tallyA: {this.state.tallyA}</h2>

					</></Route>
				<Route exact path="/counties">
					<>
						<Counties />
						<h2>tallyA: {this.state.tallyA}</h2>

					</></Route>
					
					</Router>
		)
	}
}