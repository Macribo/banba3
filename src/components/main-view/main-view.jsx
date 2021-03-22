import React from 'react';
import { Champions } from '../champions/champions'
import { Concept } from '../concept/concept'
import { History } from '../history/history'
import { Provinces } from '../provinces/provinces'
import { Counties } from '../counties/counties'
import { Register } from '../register/register'
import { StartMenu } from '../start-menu/start-menu'
import { Baile } from '../baile/baile'
import { Accordion, Card, Button } from 'react-bootstrap'
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
import mobile from '../../img/mobile.png'

export default class MainView extends React.Component {

	constructor() {
		super();
		this.state = {
			engMode: false,
			provinces: ['munster', 'ulster', 'connacht', 'leinster'],
			loggedIn: false,
			mobile: false,
			mobileHor: true,
			playerProvince: '',
			redirectProvinces: false,
			redirectChampions: false,
			redirectCounties: false,
			redirectLocation: false,
			redirectBaile: false,
			redirectRegister: false,
			redirectConcept: false,
			tallyA: 0,
			tallyB: 0,
			tallyX: 0,
			tallyY: 0,
			charClass: 0,
			showConcept: false,
			showStartMenu: false,
			startFrom:null

		}

	}

	toggleStartOptions = () => {
		if (this.state.showStartMenu === true) {
			this.setState({ showStartMenu: false })
			console.log('showStartMenu ' + this.state.showStartMenu)
		}
		else if (this.state.showStartMenu === false)
			this.setState({ showStartMenu: true })
		console.log('showStartMenu ' + this.state.showStartMenu)


	}
	conceptHandler = () => {
		if (this.state.showConcept = false) {
			this.setState({ showConcept: true })
			alert(this.state.showConcept)

		}
	}
	setCounty = () => {

		alert('set county');
		console.log('DONEGAL ********************')
	}

	incTallyA = (e) => {
		this.setState({ tallyA: this.state.tallyA + 1 })
		console.log('incrementing tally A: ' + this.state.tallyA)

	}


	decTallyA = (e) => {
		this.setState({ tallyA: this.state.tallyA - 1 })
		console.log('incrementing tally A: ' + this.state.tallyA);
	}
	// tallyB is used to select champion. 
	incTallyB = (e) => {

		; const { tallyB, charClass } = this.state;
		this.setState({ tallyB: tallyB + 1 })
		if (tallyB >= 7) { this.setState({ tallyB: 0 }) }
		console.log('decrementing tally B: ' + this.state.tallyB)
		switch (tallyB) {
			case 0:
				localStorage.setItem('avatar', 'rogue')
				break;
			case 1:
				localStorage.setItem('avatar', 'sage')
				break;
			case 2:
				localStorage.setItem('avatar', 'poet')
				break;
			case 3:
				localStorage.setItem('avatar', 'druid')
				break;
			case 4:
				localStorage.setItem('avatar', 'gallowglass')
				break;
			case 5:
				localStorage.setItem('avatar', 'detective')
				break;
			case 6:
				localStorage.setItem('avatar', 'occultist')
				break;
			case 7:
				localStorage.setItem('avatar', 'fenian')
				break;
			default: break;
		}

	}
	decTallyB = (e) => {
		this.setState({ tallyB: this.state.tallyB - 1 })
		if (this.state.tallyB <= 0) { this.setState({ tallyB: 7 }) }

		console.log('decrementing tally B: ' + this.state.tallyB)
	}
	updatePlayerProvince = () => {
		console.log(this.state.tallyX);
		if (this.state.tallyX === 0) {
			this.setState({ playerProvince: 'munster' })

			console.log(this.state.playerProvince);
		}
		this.setState({ redirectCounties: true })
	}

	incTallyX = (e) => {
		this.setState({ tallyX: this.state.tallyX + 1 })
		console.log('incrementing tally X: ' + this.state.tallyX)
		if (this.state.tallyX >= 3) { this.setState({ tallyX: 0 }) }

	}

	decTallyX = (e) => {
		this.setState({ tallyX: this.state.tallyX - 1 })
		if (this.state.tallyX <= 0) { this.setState({ tallyX: 3 }) }

		console.log('decrementing tally X: ' + this.state.tallyX)
	}

	incTallyY = (e) => {

		this.setState({ tallyY: this.state.tallyY + 1 })
		console.log('incrementing tally Y: ' + this.state.tallyY)
		// if (this.state.tallyX <= 0) { this.setState({ tallyX: 3 }) }

		// // prevent selecting beyond avaialbe county - loop back to zero
		// if (this.state.tallyX===0){
		// 	//munster has 6 counties 

		// 	if (this.state.tallyY <= 5) { this.setState({ tallyY: 0 }) }
		// }
		// 	//ulster has 9 counties 

		// if (this.state.tallyX===1){
		// 	if (this.state.tallyY <= 8) { this.setState({ tallyY: 0 }) }
		// }
		// 	//connacht has 5 counties 

		// if (this.state.tallyX===2){
		// 	if (this.state.tallyY <= 4) { this.setState({ tallyY: 0 }) }
		// }
		// //leinster has 12 counties
		// if (this.state.tallyX===3){
		// 	if (this.state.tallyY <= 11) { this.setState({ tallyY: 0 }) }
		// }
	}
	decTallyY = (e) => {

		this.setState({ tallyY: this.state.tallyY - 1 })
		console.log('decrementing tally Y: ' + this.state.tallyY)
		// prevent selecting -1 county
		if (this.state.tallyX === 0) {
			//munster has 6 counties 
			console.log('decrementing tally B: ' + this.state.tallyB)
			switch (this.state.tallyB) {
				case 0:
					localStorage.setItem('county', 'clare')
					break;
				case 1:
					localStorage.setItem('county', 'cork')
					break;
				case 2:
					localStorage.setItem('county', 'kerry')
					break;
				case 3:
					localStorage.setItem('county', 'limerick')
					break;
				case 4:
					localStorage.setItem('county', 'tipperary')
					break;
				case 5:
					localStorage.setItem('county', 'waterford')
					break;

				default: break;
			}


			if (this.state.tallyY <= 0) { this.setState({ tallyY: 5 }) }
		}
		//ulster has 9 counties 

		if (this.state.tallyX === 1) {
			if (this.state.tallyY <= 0) { this.setState({ tallyY: 8 }) }
		}
		//connacht has 5 counties 

		if (this.state.tallyX === 2) {
			if (this.state.tallyY <= 0) { this.setState({ tallyY: 4 }) }
		}
		//leinster has 12 counties
		if (this.state.tallyX === 3) {
			if (this.state.tallyY <= 0) { this.setState({ tallyY: 11 }) }
		}

	}

	bBtnDown = (e) => {

		this.setState({ engMode: true })
		console.log("engMode:" + this.state.engMode)
	}
	bBtnUp = () => {
		this.setState({ engMode: false })

		console.log("engMode:" + this.state.engMode)
	}


	resize() {
		this.setState({ mobile: window.innerWidth >= 760 });
		this.setState({ mobileHor: window.innerWidth >= window.innerHeight });
	}
	componentDidMount() {

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
							<div className="right-side">

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
						</div>

						<div className="a-and-b-btns">
							<BtnA onClick={() => { this.setState({ redirectChampions: true }) }} />
							<BtnB onTouchStart={this.bBtnDown} onTouchEnd={this.bBtnUp} />
						</div>


						{this.state.mobileHor ? <div className="select-and-start-btns">
							<BtnSelect onClick={() => { this.setState({ redirectProvinces: true }) }} />
							<BtnStart onTouchStart={this.toggleStartOptions} onClick={this.toggleStartOptions} >

							</BtnStart>


						</div> : <>
							<div className="select-and-start-btns-vert">
								<BtnSelect onClick={() => { this.setState({ redirectProvinces: true }) }} />
								<BtnStart onTouchStart={this.toggleStartOptions} onClick={this.toggleStartOptions} />
							</div></>}
						{this.state.mobile ? <div id='prompt-hor'> {this.state.engMode ? <><h3>For visitors on desktop please press 12 or right click and select inspect. Then  select </h3> <img alt="toggle mobile icon" src={mobile}></img><p>chun aithris a dhéanamh ar gléas soghluaiste</p><p>to simulate mobile device</p></> : <><h2 className="mobile-mode">I gcomhair cuirteoirí ar ríomhaire baile, brú f12 nó clé-clic agus roghnaigh Inspect, le do thoil. Ansin roghnaigh </h2><img alt="toggle mobile icon" src={mobile}></img> <p>chun aithris a dhéanamh ar gléas soghluaiste   |   to simulate mobile device</p></>}<br /> </div> : null
						}
						<div className={this.state.showStartMenu === true ? 'start-menu' : 'hidden'}>
							<StartMenu conceptHandler={this.conceptHandler} />

						</div>
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
							{this.state.mobileHor ? <div className="select-and-start-btns">
								<BtnSelect onClick={() => { this.setState({ redirectProvinces: true }) }} />
								<BtnStart onClick={this.toggleStartOptions} />
							</div> : <>
								<div className="select-and-start-btns-vert">
									<BtnSelect onClick={() => { this.setState({ redirectProvinces: true }) }} />
									<BtnStart onClick={this.toggleStartOptions} onTouchStart={this.toggleStartOptions} />
								</div></>}
							<div className="right-side">

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

						</div>


						<Champions tallyB={this.state.tallyB} engMode={this.state.engMode} />



					</></Route>


				<Route exact path="/provinces">
					<>
						{this.state.redirectCounties ? (<Redirect push to="/counties" />) : null}

						<Provinces tallyB={this.state.tallyB} engMode={this.state.engMode} tallyX={this.state.tallyX} />



						<div className="ui">
							<div className="a-and-b-btns">
								<BtnA onClick={this.updatePlayerProvince} />
								<BtnB onTouchStart={this.bBtnDown} onTouchEnd={this.bBtnUp} />
							</div>
							<div className="right-side">

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
						</div>
						{this.state.mobileHor ? <div className="select-and-start-btns">
								<BtnSelect onClick={() => { this.setState({ redirectProvinces: true }) }} />
								<BtnStart onClick={this.toggleStartOptions} />
							</div> : <>
								<div className="select-and-start-btns-vert">
									<BtnSelect onClick={() => { this.setState({ redirectProvinces: true }) }} />
									<BtnStart onClick={this.toggleStartOptions} onTouchStart={this.toggleStartOptions} />
								</div></>}
					</></Route>
				<Route exact path="/counties" redirectbaile={this.state.redirectBaile} >
					{this.state.redirectBaile ? (<Redirect push to="/baile" />) : null}
					<>
						<Counties engMode={this.state.engMode} tallyB={this.state.tallyB} tallyX={this.state.tallyX} tallyY={this.state.tallyY} />
						<div className="ui">

							<div className="a-and-b-btns">
								<BtnA onClick={() => { this.setState({ redirectBaile: true }) }} />
								<BtnB onTouchStart={this.bBtnDown} onTouchEnd={this.bBtnUp} />
							</div>
							<div className="right-side">

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
							</div>
							<div className="select-and-start-btns">
								<BtnSelect onClick={() => { this.setState({ redirectProvinces: true }) }} />
								<BtnStart onClick={this.toggleStartOptions} onTouchStart={this.toggleStartOptions} />
							</div>

						</div>
					</>
				</Route>
				<Route exact path="/register"  >
					{this.state.redirectBaile ? ( <Redirect push to="/baile" />) : null}
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
								<BtnStart onClick={this.toggleStartOptions} onTouchStart={this.toggleStartOptions} />
							</div>

						</div>
					</>
				</Route>

				<Route exact path="/login" >
					<h1>login</h1>
				</Route>

				<Route exact path="/baile">

					<Baile tallyX={this.state.tallyX} />

				</Route>


				<Route exact path="/concept">

					<Concept tallyX={this.state.tallyX} />

				</Route>
				<Route exact path="/history">

					<History  tallyX={this.state.tallyX} />
					
				</Route>
			</Router>
		)
	}
}