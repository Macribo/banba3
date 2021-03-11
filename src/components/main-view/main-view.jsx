import React from 'react';
import { Champions } from '../champions/champions'
import { Provinces } from '../provinces/provinces'
import { Counties } from '../counties/counties'
import { Register } from '../register/register'
import { Baile } from '../baile/baile'
// import {UI} from '../ui/ui'
import { BtnSelect } from '../ui/btn-select'
import { BtnStart } from '../ui/btn-start'

import { BtnA } from '../ui/btn-a'
import { BtnB } from '../ui/btn-b'
import { BtnU } from '../ui/btn-u'
import { BtnL } from '../ui/btn-l'
import { BtnR } from '../ui/btn-r'
import { BtnD } from '../ui/btn-d'
import { BtnM } from '../ui/btn-m'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import './main-view.css'
export default class MainView extends React.Component {

	constructor() {
		super();
		this.state = {
			engMode: 0,
			provinces: ['munster', 'ulster', 'connacht', 'leinster'],
			loggedIn: false,
			playerProvince: '',
			redirectProvinces: false,
			redirectChampions: false,
			redirectCounties: false,
			redirectLocation: false,
			redirectRegister: false,
			redirectBaile: false,
			mobileHor:false,
			tallyA: 0,
			tallyB: 0,
			tallyX: 0,
			tallyY: 0,
		}

	}


	setCounty = () => {

		alert();
		console.log('DONEGAL ********************')
	}

	incTallyA = () => {
		this.setState({ tallyA: this.state.tallyA + 1 })
		console.log('incrementing tally A: ' + this.state.tallyA)
	}


	decTallyA = () => {
		this.setState({ tallyA: this.state.tallyA - 1 })
		console.log('incrementing tally A: ' + this.state.tallyA)
	}
	// tallyB is used to select champion. 
	incTallyB = () => {
		this.setState({ tallyB: this.state.tallyB + 1 })
		if (this.state.tallyB >= 7) { this.setState({ tallyB: 0 }) }
		console.log('decrementing tally B: ' + this.state.tallyB)

	}
	decTallyB = () => {
		this.setState({ tallyB: this.state.tallyB - 1 })
		if (this.state.tallyB <= 0) { this.setState({ tallyB: 7 }) }

		console.log('decrementing tally B: ' + this.state.tallyB)
	}
	updatePlayerProvince = () => {
		console.log(this.state.tallyX);
		if (this.state.tallyX === 0) {
			// alert();
			this.setState({playerProvince: 'munster' })
		}
		console.log(this.state.playerProvince);
		this.setState({ redirectCounties: true })
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

	bBtnDown = () => {
		this.setState({ engMode: true })
		console.log("engMode:" + this.state.engMode)
	}
	bBtnUp = () => {
		this.setState({ engMode: false })

		console.log("engMode:" + this.state.engMode)
	}


resize() {
    this.setState({mobileHor: window.innerWidth >= 760});
}
componentDidMount(){

	window.addEventListener("resize", this.resize.bind(this));
    this.resize();
}
componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
}
	render() {

		return (
			<Router>
				<Route exact path="/" >
					<div >
						<div id="splash"></div>
						{this.state.redirectChampions ? (<Redirect push to="/champions" />) : null}
						{this.state.engMode === true ? <><h2>A <span style={{ "color": "plum" }}>|</span> Onwards</h2><h2>B <span style={{ "color": "plum" }}>|</span> Bearla</h2></> : <><h2>A <span style={{ "color": "plum" }}>|</span>  Ar aghaidh</h2><h2>B <span style={{ "color": "plum" }}>|</span> English</h2></>}

						<div className="ui">
							<div className="a-and-b-btns">
								<BtnA onClick={() => { this.setState({ redirectChampions: true }) }} />
								<BtnB onTouchStart={this.bBtnDown} onTouchEnd={this.bBtnUp} />
							</div>
							<div className="directional-pad">
								<div className='grid-container'>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnU />
									</div>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnL />
									</div>
									<div className="grid-item"><BtnM /></div>
									<div className="grid-item">      <BtnR />
									</div>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnD />
									</div>
									<div className="grid-item"></div>
								</div>
							</div>
						</div>
						<div className="select-and-start-btns">
							<BtnSelect />
							<BtnStart />
						</div>
{this.state.mobileHor ? <div id='prompt-hor' >I dtosacht báire, mobile. <br/>Brú f12 agus amhairc mar fón póca.</div>:null
}

					</div>
				</Route>

				<Route exact path="/champions">

					{this.state.redirectProvinces ? (<Redirect push to="/provinces" />) : null}
					<>


						<div className="ui">
							<div className="a-and-b-btns">
								<BtnA onClick={() => { this.setState({ redirectProvinces: true }) }} />
								<BtnB onTouchStart={this.bBtnDown} onTouchEnd={this.bBtnUp} />
							</div>
							<div className="directional-pad">
								<div className='grid-container'>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnU onClick={this.incTallyB} />
									</div>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnL onClick={this.decTallyB} />
									</div>
									<div className="grid-item"><BtnM /></div>
									<div className="grid-item">      <BtnR onClick={this.incTallyB} />
									</div>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnD onClick={this.decTallyB} />
									</div>
									<div className="grid-item"></div>
								</div>
							</div>
						</div>




						<Champions tallyB={this.state.tallyB} engMode={this.state.engMode} />



					</></Route>


				<Route exact path="/provinces">
					<>
						{this.state.redirectCounties ? (<Redirect push to="/counties" />) : null}

						<Provinces engMode={this.state.engMode} tallyX={this.state.tallyX} />



						<div className="ui">
							<div className="a-and-b-btns">
								<BtnA onClick={this.updatePlayerProvince} />
								<BtnB onTouchStart={this.bBtnDown} onTouchEnd={this.bBtnUp} />
							</div>
							<div className="directional-pad">
								<div className='grid-container'>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnU onClick={this.incTallyX} />
									</div>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnL onClick={this.decTallyX} />
									</div>
									<div className="grid-item"><BtnM /></div>
									<div className="grid-item">      <BtnR onClick={this.incTallyX} />
									</div>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnD onClick={this.decTallyX} />
									</div>
									<div className="grid-item"></div>
								</div>
							</div>
						</div>


					</></Route>
				<Route exact path="/counties" redirectRegister={this.state.redirectRegister} >
					{this.state.redirectRegister ? (<Redirect push to="/register" />) : null}
					<>
						<Counties tallyX={this.state.tallyX} tallyY={this.state.tallyY} countyHandler={this.countyHandler} />
						<div className="ui">

							<div className="a-and-b-btns">
								<BtnA onClick={() => { this.setState({ redirectRegister: true }) }} />
								<BtnB onTouchStart={this.bBtnDown} onTouchEnd={this.bBtnUp} />
							</div>
							<div className="directional-pad">
								<div className='grid-container'>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnU onClick={this.incTallyY} />
									</div>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnL onClick={this.decTallyY} />
									</div>
									<div className="grid-item"><BtnM /></div>
									<div className="grid-item">      <BtnR onClick={this.incTallyY} />
									</div>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnD onClick={this.decTallyY} />
									</div>
									<div className="grid-item"></div>
								</div>


							</div>
							<div className="select-and-start-btns">
								<BtnSelect onClick={() => { this.setState({ redirectProvinces: true }) }} />
								<BtnStart />
							</div>

						</div>
					</>
				</Route>
				<Route exact path="/register"  >
					{this.state.redirectBaile ? (this.setCounty, <Redirect push to="/baile" />) : null}
					<>
						<Register tallyA={this.state.tallyA} engMode={this.state.engMode} tallyB={this.state.tallyB} tallyY={this.state.tallyY} />
						<div className="ui">
							<div className="a-and-b-btns">
								<BtnA onClick={() => { this.setState({ redirectBaile: true }) }} />
								<BtnB onTouchStart={this.bBtnDown} onTouchEnd={this.bBtnUp} />
							</div>
							<div className="directional-pad">
								<div className='grid-container'>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnU onClick={this.incTallyY} />
									</div>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnL onClick={this.decTallyY} />
									</div>
									<div className="grid-item"><BtnM /></div>
									<div className="grid-item">      <BtnR onClick={this.incTallyY} />
									</div>
									<div className="grid-item"></div>
									<div className="grid-item">      <BtnD onClick={this.decTallyY} />
									</div>
									<div className="grid-item"></div>
								</div>


							</div>
							<div className="select-and-start-btns">
								<BtnSelect />
								<BtnStart />
							</div>

						</div>
					</>
				</Route>

				<Route exact path="/login" >
					<h1>login</h1>
				</Route>

				<Route exact path="/baile">

					<Baile />
					<div className="ui">

						<div className="a-and-b-btns">
							<BtnA onClick={() => { this.setState({ redirectRegister: true }) }} />
							<BtnB onTouchStart={this.bBtnDown} onTouchEnd={this.bBtnUp} />
						</div>
						<div className="directional-pad">
							<div className='grid-container'>
								<div className="grid-item"></div>
								<div className="grid-item">      <BtnU onClick={this.incTallyY} />
								</div>
								<div className="grid-item"></div>
								<div className="grid-item">      <BtnL onClick={this.decTallyY} />
								</div>
								<div className="grid-item"><BtnM /></div>
								<div className="grid-item">      <BtnR onClick={this.incTallyY} />
								</div>
								<div className="grid-item"></div>
								<div className="grid-item">      <BtnD onClick={this.decTallyY} />
								</div>
								<div className="grid-item"></div>
							</div>


						</div>
						<div className="select-and-start-btns">
							<BtnSelect onClick={() => { this.setState({ redirectProvinces: true }) }} />
							<BtnStart />
						</div>

					</div>

				</Route>
			</Router>
		)
	}
}