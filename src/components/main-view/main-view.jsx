import React from 'react';
import { Champions } from '../champions/champions'
import { Concept } from '../concept/concept'
import { History } from '../history/history'
import { Provinces } from '../provinces/provinces'
import { Counties } from '../counties/counties'
import { Register } from '../register/register'
import { StartMenu } from '../start-menu/start-menu'
import { Baile } from '../baile/baile'
import { CountyMap } from '../county-map/county-map'
import { Accordion, Card, Button } from 'react-bootstrap'
// import {UI} from '../ui/ui'
import { BtnSelect } from '../ui/btn-select'
import { BtnStart } from '../ui/btn-start'
import { useLocation } from 'react-router-dom'
import { BtnA } from '../ui/btn-a'
import { BtnB } from '../ui/btn-b'
import { BtnU } from '../ui/btn-u'
import { BtnL } from '../ui/btn-l'
import { BtnR } from '../ui/btn-r'
import { BtnD } from '../ui/btn-d'
import { BtnM } from '../ui/btn-m'
import ciaroga from '../../img/logo.png'
import promptVid from '../../vid/j1.mp4'

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import './main-view.css'
import Druids from '../druids/druids'
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
			playerProvince: 'munster',
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
			avatar: 'null',
			ulster: ['antrim', 'armagh', 'cavan', 'donegal', 'down', 'fermanagh', 'derry', 'monaghan', 'tyrone'],
			munster: ['clare', 'cork', 'kerry', 'limerick', 'tipperary', 'waterford'],
			connacht: ['galway', 'leitrim', 'mayo', 'roscommon', 'sligo'],
			leinster: ['carlow', 'dublin', 'kildare', 'kilkenny', 'laois', 'longford', 'louth', 'meath', 'offaly', 'westmeath', 'wexford', 'wicklow'],

			whereAmI: 'carlow',
			polTexts: [
				`Zgodnie z legendą`,
				`
				 
					Gaeliccy ludzie wywodzą się
					od iberyjskiego plemienia
					zwanego Milesians.
				`,
				`Prowadzeni przez Amergina, Milesianie
				podróżowali na wyspę
				 plemienia Dé Dannan. 
				`

				, `Druidzi z Dé Danann 
				wywołali magiczną burzę.
				by powstrzymać ekspedycję Amergina 
				ekspedycji Amergina przed dotarciem do lądu. 
				`,
				`Ale Amergín miał moc poezji`,

				`Jestem wiatrem, który oddycha na morzu. 
			  Jestem falą oceanu, jestem szmerem fal`,

				`Jestem jeleniem, 
			  jastrzębiem na klifie,
			  promieniem słońca,
			  najpiękniejszą z roślin`,

				`"Jestem słowem nauki
			   Jestem czubkiem lancy bojowej`,
				`...(jestem) Pieśnią na włóczni
			   zaklęciem wiatrów`
				,
				`Burza ucichła. 
			Żołnierze Hiszpanii zwyciężyli
`
				,

				`				Dé Danann wycofali się do innego świata, tak mówi historia; i przez tysiąclecia cywilizacja gaelicka kwitła w Irlandii.`
				,

				`1169CE: obalony król Diarmait Mac Murchada poprosił normańskich najemników o stłumienie rebelii w Leinsterze.
				`, `
				Król Anglii Henryk II wykorzystał to do ogłoszenia podbitych miast 
			ziemiami koronnymi. Tak zaczęło się 800 lat angielskiego panowania w Irlandii.
				`, `

				Do roku 1500, pomimo wieków kampanii wojskowych.
			angielskie prawo istniało tylko wokół zamku w Dublinie.
				`, `

				1580 AD: oblężone gaelickie siły włoskie i hiszpańskie zostały wyrżnięte w Ard na Caithne w Corca Dhuibhne, przez lorda Grey de Wilton.
				`, `
				Po masakrze "Szarej wiary", Edmund Spencer napisał do królowej Elizebeth, i wyjaśnił dlaczego Irlandczycy wciąż opierają się angielskiemu panowaniu.`
				,


				`Soe that the speach being Irish, 
			the hart must needes be Irishe; 
			for out of the aboundance of the hart, 
			the tonge speaketh
			- A Veue of The Present State of Ireland`,
				`1607CE: Ostatnie twierdze gaelickiej Irlandii upadły i jako ostatni wodzowie Ulsteru zostali zmuszeni do wygnania, Tak zakończył się gaelicki porządek.`,

				`Każde pokolenie buntowało się przeciwko angielskiej władzy. Nie było pokoju.`,
				`Głód w XIX wieku zmusił Irlandczyków do milczenia. Serca buntowników znów się podniosły.`, `
				Nazwy językowe przeznaczenie.`
				, `
				Taka jest potęga miłości w delikatnym umyśle,
				że może ona zmienić cały bieg rodzaju.
					 
				-Edmund Spenser`


			],




			// eslint-disable-next-line no-sparse-arrays
			engTexts: [		 

		``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``	],




			storyTexts: [

			`
			
Meafar is ea 
an Desktop.

Tugann meafar an desktop

//iomhá an desc, le bin athcúrsála, filteán agus documéidí 

comhthacs don luchóg,
//iomhá an luchóg *clic-clic.wav* 

 fuinneog an scálán a thuiscint agus elimentí a tharraingt timpeal,
 mar-seo && mar-siúd.
 
Tá meafar an "Tree" nios sínsire agus nios cruinne ná meafar an "Desktop". Tugann sé
//iomhá crann; oh/myzsh doing fancy hacker stuff installing new react-native project? 

comhthacs don mearchlár.

Samhlaigh cómhead an riomhaire mar geága crann. Is feidir íad a "fheiscint"
mar seo:

ls
is feidir bogadh suas i dtreo na geaga

nó síos i dtreo an préamh;


mar seo ./

ls  //las solas 
// lamp light illuminates current directory.

ls al // las solas agus taispán gach sonradh.

>deanta
>inis dom faoi na sonraí  //represented as zsh & dragons

Anois tá aicearraí méar chlár againn chun:
Fuinneog dubh a oscailt;
breathnú timpeal, agus bogadh súas sías géag agus préamh an ríomhaire.

doras a haon: foghlaim cleas (ls sl)
choo choo
doras a dó Cruthaigh bog earra agus scrois cód.


síar;
ar aghaidh;
agus dhá bheallaigh le breathnú timpeal.







//popup tearma nua! "ls" added to tearmaí & coin-clink.wav

ls -al // feach 
bogadh súas síos an crann, i dreo préamh nó géaga.

seo híad na céimanna chun tosnú ag riomhairacht le linux.

Bontús linucs

Chun an cúrsa a thosnú, beidh 
ríomahire uait; ceann nach usáidtar a thuilleadh. 
agus fón póca.


Céim a haon:
Nuair atá an riomahire ulamh ioslódál an app seo ar an fón. Oscal an app 
I dtosach báirre;

Cúl tacú! Má tá rud ar bith ar an ríomhaire, gur míann leat a choméad sábháil anois é. Tar éis an chead céim eile, beidh síad scriosta go hiomlán, ní beidh teacht ortha arís. Tá an foláramh tugtha. 


Cén fáth Linux?

Tá Linux Saor in aisce,
agus á forbhairt ag an pobal.

Cuireann Linux míle urlaisí 
saoir in aisce ar fáil, 

már chuid den ghluiseacht 
"open source".




			
			
			`		
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

	countyHandler = (e) => {
		this.setState({ whereAmI: e })
		console.log('countyhandler sets where am I to ' + e)
		alert('countyhandler sets where am I to ' + e)
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
		console.log('incrementing tally B: ' + this.state.tallyB)


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

		if (this.state.tallyX === 1) {
			this.setState({ playerProvince: 'ulster' })

			console.log(this.state.playerProvince);
		}
		if (this.state.tallyX === 2) {
			this.setState({ playerProvince: 'connacht' })

			console.log(this.state.playerProvince);
		}

		if (this.state.tallyX === 3) {
			this.setState({ playerProvince: 'leinster' })

			console.log(this.state.playerProvince);
		}
		this.setState({ redirectCounties: true })
	}

	incTallyX = (e) => {
		this.setState({ tallyX: this.state.tallyX + 1 })
		this.setState({ playerProvince: this.state.provinces[this.state.tallyX] })
		console.log('incrementing tally X: ' + this.state.tallyX)
		console.log("playerProvince" + this.state.playerProvince);
		if (this.state.tallyX >= 3) { this.setState({ tallyX: 0 }) }

	}

	decTallyX = (e) => {
		this.setState({ tallyX: this.state.tallyX - 1 })
		if (this.state.tallyX <= 0) { this.setState({ tallyX: 3 }) }

		console.log('decrementing tally X: ' + this.state.tallyX)
	}

	incTallyY = (e) => {

		this.setState({ tallyY: this.state.tallyY + 1 })
		if (this.state.playerProvince === 'ulster') {
			this.setState({
				whereAmI: this.state.ulster[this.state.tallyY]
			})
			console.log('whereAmI: ' + this.state.whereAmI)
		}

		if (this.state.playerProvince === 'leinster') {
			this.setState({ whereAmI: this.state.leinster[this.state.tallyY] })
		}

		if (this.state.playerProvince === 'munster') {
			this.setState({ whereAmI: this.state.munster[this.state.tallyY] })
		}

		if (this.state.playerProvince === 'connacht') {
			this.setState({ whereAmI: this.state.connacht[this.state.tallyY] })
		}
		console.log('incrementing tally Y: ' + this.state.tallyY)
		console.log('whereAmI ' + this.state.whereAmI)
		console.log("playerProvince" + this.state.playerProvince);


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
	setChamp = () => {

		const { tallyB } = this.state;

		switch (tallyB) {
			case 0:
				this.setState({ avatar: 'rogue' })
				break;
			case 1:
				this.setState({ avatar: 'sage' })

				break;
			case 2:
				this.setState({ avatar: 'poet' })

				break;
			case 3:
				this.setState({ avatar: 'druid' })

				break;
			case 4:
				this.setState({ avatar: 'gallowglass' })

				break;
			case 5:
				this.setState({ avatar: 'detective' })

				break;
			case 6:
				this.setState({ avatar: 'occultist' })

				break;
			case 7:
				this.setState({ avatar: 'fenian' })
				break;
			default: break;
		}


		console.log('hi state avatar')
		localStorage.setItem('avatar', this.state.avatar)
			; this.setState({ redirectProvinces: true })

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

	fullScreenToggler = () => {
		//toggling logic
	}
	componentDidMount() {

		window.addEventListener("resize", this.resize.bind(this));
		this.resize();
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.resize.bind(this));
	}
	render() {
		const usePathname = () => {
			const location = useLocation();
			return location.pathname;
		}
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
						{/* < /> */}
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
						{this.state.mobile ? <div id='prompt-hor'>
							<video autoPlay muted loop id="prompt-vid"><source src={promptVid} type="video/mp4" alt=" remember the dream speed of falling and fly along the memory of wind" /></video>
							<div id="hills-overlay" />


							{this.state.engMode ? <><h3>For visitors on desktop please press 12 or right click and select inspect. Then  select </h3> <img alt="toggle mobile icon" src={mobile}></img><p>chun aithris a dhéanamh ar gléas soghluaiste</p><p>to simulate mobile device</p></> : <div className="mobile-mode"><h2 >I gcomhair cuirteoirí ar ríomhaire baile, brú <span id="f12">f12</span> nó clé-clic agus roghnaigh <span id="inspect">inspect</span>, le do thoil. Ansin roghnaigh </h2><img alt="toggle mobile icon" src={mobile}></img> <p>chun aithris a dhéanamh ar gléas soghluaiste   |   to simulate mobile device</p></div>}<br />
							<img id="ciaroga" src={ciaroga} />
						</div> : null


						}

						<div className={this.state.showStartMenu === true ? 'start-menu' : 'hidden'}>
							<StartMenu conceptHandler={this.conceptHandler} fullScreenToggler={this.fullScreenToggler} />


						</div>
					</div>

				</Route>

				<Route exact path="/champions">
					{ }{localStorage.getItem('avatar') === "druid" ? <Redirect push to="/druids" /> : null}
					{this.state.redirectProvinces ? (<Redirect push to="/provinces" />) : null}
					<>


						<div className="ui">
							<div className="a-and-b-btns">
								<BtnA onClick={this.setChamp} />
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

					<Baile tallyX={this.state.tallyX} avatar={this.state.avatar} whereAmI={this.state.whereAmI} countyHandler={this.countyHandler} />

				</Route>

				<Route exact path="/countyMap">
					<>
						<CountyMap tallyX={this.state.tallyX} avatar={this.state.avatar} whereAmI={this.state.whereAmI} />

					</>
				</Route>


				<Route exact path="/concept">

					<Concept tallyX={this.state.tallyX} />

				</Route>
				<Route exact path="/history">

					<History toggleStartOptions={this.toggleStartOptions} polTexts={this.state.polTexts} engTexts={this.state.engTexts} storyTexts={this.state.storyTexts} engMode={this.state.engMode} tallyX={this.state.tallyX} />
					<div className="a-and-b-btns">
						<BtnA onClick={() => { this.setState({ redirectChampions: true }) }} />
						<BtnB onTouchStart={this.bBtnDown} onTouchEnd={this.bBtnUp} />
					</div>

				</Route>
			</Router>
		)
	}
}