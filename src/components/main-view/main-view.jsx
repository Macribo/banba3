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
			startFrom: null,

			engTexts: [
				`Long long ago...`,
				`
				According to legend,
				Gaelic people descend
				from an Iberian tribe
				called the Milesians. 
				`,
				`Breogán son of Brath
				son of Bile Galamh Míl Espáine
				had seven sons 
				`,
				`    One of whom
				  was named
				<br/>Amergin <br/>
				of the Bright Knees<span ">*</span><br/>
				Soldier of Spain <br/>
				<br/>
			<h5 >    *Birth of Song  </h5>
				
				`,
				`Amergin 
			   and the Milesians
			   voyaged to the island of
				the Dé Dannan tribe.`,
				`The druids of Dé Danann 
				raised a magical storm
				to keep Amergín’s 
				expedition from reaching land. 
				`,
				`But Amergín had powers of poetry`,

				`I am the wind which breaths upon the sea<br/>
			  I am the wave of the ocean<br/>
			  I am the murmur of the billows`,

				`I am Stag of Seven Tines<br/>
			  I am a Hawk on a Cliff<br/>
			  I am a beam of the sun<br/>
			  I am the fairest of plants`,

				`I am a word of science<br/>
			   I am the point of the lance of battle`,
				`...(I am) a Song on a Spear<br/>
			   an Enchantment of Winds.`
				,
				`The kings of Dé Danann 
			were killed in single combat
			 by the sons of Míl Espáine.`

				,

				`The Dé Danann 
			retreated into the Earth,
			and for thousands of years 
			Gaelic civilization 
			flourished in Ireland.`
				,

				`In <span style="color:white">1169 CE</span>, deposed King Diarmait Mac Murchada solicited Norman Mercenaries to quell rebellion in Leinster.`
				,
				`King Henry II of England used this to declare the conquered cities 
			crown-land. So began 800 years of English rule in Ireland.`
				,

				`By 1500 AD, despite centuries of military campaigning,
			English law existed only around Dublin Castle.`
				,

				`
			Beseiged Gaelic Italian and Spanish forces were slaughtered at Ard na Caithne in Corca Dhuibhne, by lord Grey de Wilton.`
				,
				`After the 'Grey faith' massacre, Edmund Spencer wrote to Queen Elizebeth, and explained why the Irish kept resisting English rule:`
				,


				`"Soe that the speach being Irish, 
			the hart must needes be Irishe; 
			for out of the aboundance of the hart, 
			the tonge speaketh"<br/>
			<h6>A Veue of The Present State of Ireland</h6>`
				,
				`Gaelic Ireland's final strongholds fell and as the last Ulster chieftains were forced into exile, So ended the Gaelic order.`,


				`Edmund Spencer was wrong.
				The heart can be Irish, whilst the tongue speaks English. 
			
				`,
				`When the tongue is Gaelic, what speaketh the heart ?
				
			   
				</p> </span>`,










			],
			storyTexts: [

				`Fadó fado...`,
				`Ón treabh Ibírach 'Míl Espáine'
		 a dtagann na Gael,
		 de réir na finscéalíochta. 
		`,
				`Bhí seachtar ag Galamh mac Bile mac Brath Míl Espáine`,

				`File agus draoí dunne den seachtar: Amergin Glúingel Míl Espáine.`,

				`Thóg Amergín ar aistear mara go hOileann na Tuaithe Dé Danann a muintir.`,

				`Chas draoithe Dé Danann na Mílaoisigh síar le stoirm dríochta`,

				`Ach bhí bua na filíochta ag Amergin...`,
				`Am gaeth i m-muir Am tond trethan Am fuaim mara`,
				`Am dam seċt ndirend Am séig i n-aill Am dér gréne Am cain lubai`,

				`Am bri danae Am bri i fodb fras feoċtu	Am dé delbas do ċind codnu`,
				`...Cáinte im gai cainte gaiṫe.`,				`
	Chiúnaigh an stoirm.
	Bris na Míl Espáinaigh 
	ar forsaí Dé Dannan.
	`,
				`Cúlaigh na Túithe 
	agus lonnaigh na Mílaoisigh in Éireann.
	Bin tús cíannta Gaelach, de réir an finscéalíocht.`,

				`1169AD: Lorg Rí theistithe Diarmait Mac Murchada cabhair galamhas Normánach chun éirí amach Laighean a chuir faoi chois.`
				,
				`Tapaidh Anraí II an deis úinéireacht a maíomh ar na ionnaíthe treascartha. Sin mar a thosnaigh 800 blíain Sasannachas in Éireann.`
				,

				`In aineoinn fachtasíocht mílata na cheadta blíana,
	Faoí 1500AD, Ní raibh dlí Sassanach i bheidhm ach tímpeal ar caisleán Átha Cliath.`
				,

				`1580AD:Slad Tiarna Grey de Wilton forsaí Gaelach Idálach agus Spánach i Ard na Caithne in Corca Dhuibhne.`
				,
				`Bhí an file Edmund Spencer i finné an slad. Mínigh sé dá ḃanríonn  "why the Irish keep resisting English rule"`
				,

				`"Soe that the speach being Irish, 
	the hart must needes be Irishe; 
	for out of the aboundance of the hart, 
	the tonge speaketh" -A Veue of The Present State of Ireland`
				,
				`1607AD: Briseadh ar daingeannacha na Gael.
		Díbríodh na Taoisaigh, 
		agus bin an ord ársa Gaelach 
	   briste ar deireadh.`,

				`Tá an Gaelachas aisghabhtha i bprionsabal agus dlí.`,
				`Le teanga Gaelach, abair leat a chroí.`

			]
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
					{this.state.redirectBaile ? (<Redirect push to="/baile" />) : null}
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

					<History engTexts={this.state.engTexts} storyTexts={this.state.storyTexts} engMode={this.state.engMode} tallyX={this.state.tallyX} />
					<div className="a-and-b-btns">
						<BtnA onClick={() => { this.setState({ redirectChampions: true }) }} />
						<BtnB onTouchStart={this.bBtnDown} onTouchEnd={this.bBtnUp} />
					</div>

				</Route>
			</Router>
		)
	}
}