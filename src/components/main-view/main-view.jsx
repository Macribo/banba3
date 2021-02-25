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
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import './main-view.css'
export default class MainView extends React.Component {

	constructor() {
		super();
		this.state = {
			tallyA: 0,
			tallyB: 0,
			tallyX: 3,
			tallyY: 0,
			engMode: false,
			redirectProvinces: false,
			redirectChampions: false,
			redirectCounties: false,
			redirectLocation: false
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

	countyHandler = () => {

		alert('countyhandler');
	}
	render() {

		return (
			<Router>
				<Route exact path="/" >
					<div >
						{this.state.redirectChampions ? (<Redirect push to="/champions" />) : null}
						<h1>Greetings from main</h1>
						<h2>tallyA: {this.state.tallyA}</h2>
						<h2>tallyB: {this.state.tallyB}</h2>
						<h2>tallyX: {this.state.tallyX}</h2>
						<h2>tallyY: {this.state.tallyY}</h2>
						<div className="ui">
							<div className="a-and-b-btns">
								<BtnA onClick={() => { this.setState({ redirectChampions: true }) }} />
								<BtnB />
							</div>
							<div className="directional-pad">
								<div className='grid-container'>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnU />
									</div>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnL />
									</div>
									<div className="grid-item"><div className="btnM" />_</div>
									<div className="grid-item">      <BtnR />
									</div>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnD />
									</div>
									<div className="grid-item"></div>
								</div>
							</div>
						</div>
					</div>
				</Route>

				<Route exact path="/champions">

					{this.state.redirectProvinces ? (<Redirect push to="/provinces" />) : null}
					<>


						<div className="ui">
							<div className="a-and-b-btns">
								<BtnA onClick={() => { this.setState({ redirectProvinces: true }) }} />
								<BtnB />
							</div>
							<div className="directional-pad">
								<div className='grid-container'>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnU onClick={this.incTallyB} />
									</div>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnL onClick={this.decTallyB} />
									</div>
									<div className="grid-item"><div className="btnM" />_</div>
									<div className="grid-item">      <BtnR onClick={this.incTallyB} />
									</div>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnD onClick={this.decTallyB} />
									</div>
									<div className="grid-item"></div>
								</div>
							</div>
						</div>




						<Champions tallyB={this.state.tallyB} />



					</></Route>


				<Route exact path="/provinces">
					<>
						{this.state.redirectCounties ? (<Redirect push to="/counties" />) : null}

						<Provinces tallyX={this.state.tallyX} />
						<h2>tallyX: {this.state.tallyX}</h2>

						

						<div className="ui">
							<div className="a-and-b-btns">
								<BtnA onClick={() => { this.setState({ redirectCounties: true }) }} />
								<BtnB />
							</div>
							<div className="directional-pad">
								<div className='grid-container'>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnU onClick={this.incTallyX}/>
									</div>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnL onClick={this.decTallyX} />
									</div>
									<div className="grid-item"><div className="btnM" />_</div>
									<div className="grid-item">      <BtnR onClick={this.incTallyX}  />
									</div>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnD onClick={this.decTallyX} />
									</div>
									<div className="grid-item"></div>
								</div>
							</div>
						</div>

						onClick={() => { this.setState({ redirectCounties: true }) }}
					</></Route>
				<Route exact path="/counties" redirectLocation={this.state.redirectLocation}>
					<>
						<Counties tallyX={this.state.tallyX} tallyY={this.state.tallyY} countyHandler={this.countyHandler} />
						<div className="ui">


							<BtnR onClick={this.incTallyY} />
							<BtnL onClick={this.decTallyY} />
							<BtnU onClick={this.incTallyY} />
							<BtnD onClick={this.decTallyY} />
							<BtnA onClick={() => { this.setState({ redirectLocation: true }) }} />

							<BtnB />



						</div>
					</></Route>

			</Router>
		)
	}
}