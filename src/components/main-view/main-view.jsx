import React from 'react';
import { Champions } from '../champions/champions'
import { Provinces } from '../provinces/provinces'
import { Counties } from '../counties/counties'
// import {UI} from '../ui/ui'
import { BtnA } from '../ui/btn-a'
import { BtnB } from '../ui/btn-b'
import { BtnU } from '../ui/btn-u'
import { BtnL } from '../ui/btn-l'
import { BtnR } from '../ui/btn-r'
import { BtnD } from '../ui/btn-d'
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom"

export default class MainView extends React.Component {
	
	constructor() {
		super();
		this.state = {
			tallyA: 0,
			tallyB: 0,
			tallyX: 3,
			tallyY: 0,
			engMode: false,
			redirectProvinces:false,
			redirectChampions:false,
			redirectCounties:false,
			redirectLocation:false
		}

	}
	
	incTallyA = () => {
		this.setState({ tallyA: this.state.tallyA + 1 })
		console.log('incrementing tally A: ' + this.state.tallyA)
	}


	decTallyA = () => {
		this.setState({ tallyA: this.state.tallyA - 1 })
		console.log('incrementing tally A: ' + this.state.tallyA)
	}
	incTallyB = () => {
		this.setState({ tallyB: this.state.tallyB + 1 })
		console.log('decrementing tally B: ' + this.state.tallyB)
	}
	decTallyB = () => {
		this.setState({ tallyB: this.state.tallyB - 1 })
		console.log('decrementing tally B: ' + this.state.tallyB)
	}


	incTallyX = () => {
		this.setState({ tallyX: this.state.tallyX + 1 })
		console.log('incrementing tally X: ' + this.state.tallyX)
	}

	decTallyX = () => {
		this.setState({ tallyX: this.state.tallyX - 1 })
		console.log('decrementing tally X: ' + this.state.tallyX)
	}

	incTallyY = () => {
		this.setState({ tallyY: this.state.tallyY + 1 })
		console.log('incrementing tally Y: ' + this.state.tallyY)
	}
	decTallyY = () => {
		this.setState({ tallyY: this.state.tallyY - 1 })
		console.log('decrementing tally Y: ' + this.state.tallyY)
	}
	

	render() {
		
		return (
			<Router>
				<Route exact path="/" >
					<div >
					{ this.state.redirectChampions ? (<Redirect push to="/champions" />) : null }
						<h1>Greetings from main</h1>
						<h2>tallyA: {this.state.tallyA}</h2>
						<h2>tallyB: {this.state.tallyB}</h2>
						<h2>tallyX: {this.state.tallyX}</h2>
						<h2>tallyY: {this.state.tallyY}</h2>
						<BtnA onClick={()=>{this.setState({redirectChampions:true})}}/>
					</div>

				</Route>

				<Route exact path="/champions">
					<>
					{ this.state.redirectProvinces ? (<Redirect push to="/provinces" />) : null }

						<Champions tallyB={this.state.tallyB}   />

						<BtnR onClick={this.incTallyB} />
						<BtnL onClick={this.decTallyB} />
						<BtnU onClick={this.incTallyB} />
						<BtnD onClick={this.decTallyB} />
						<BtnA onClick={()=>{this.setState({redirectProvinces:true})}}/>
						<BtnB />
					</></Route>


				<Route exact path="/provinces">
					<>
					{ this.state.redirectCounties ? (<Redirect push to="/counties" />) : null }

						<Provinces tallyX={this.state.tallyX}  />
						<h2>tallyX: {this.state.tallyX}</h2>

						<BtnR onClick={this.incTallyX} />
						<BtnL onClick={this.decTallyX} />
						<BtnU onClick={this.incTallyX} />
						<BtnD onClick={this.decTallyX} />
						<BtnA onClick={()=>{this.setState({redirectCounties:true})}}/>

						<BtnB />

					</></Route>
				<Route exact path="/counties" redirectLocation = {this.state.redirectLocation}>
					<>
						<Counties tallyX={this.state.tallyX} />
						<h2>tallyY: {this.state.tallyY}</h2>
						<BtnR onClick={this.incTallyY} />
						<BtnL onClick={this.decTallyY} />
						<BtnU onClick={this.incTallyY} />
						<BtnD onClick={this.decTallyY} />
						<BtnA onClick={()=>{this.setState({redirectLocation:true})}}/>

						<BtnB />
					</></Route>

			</Router>
		)
	}
}