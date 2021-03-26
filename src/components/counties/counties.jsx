import React from 'react';
import './counties.css'
export class Counties extends React.Component {

	constructor() {
		super();
		this.state = {
			cuige: ['Mumhan', 'Uladh', 'Connacht', 'Laighean'],
			contaeM: ['Contae an Chláir', 'Contae Chorcaí', 'Contae Chiarraí', 'Contae Luimnigh', 'Contae Thiobraid Árann', 'Contae Phort Láirge'],
			countiesUlster: ['Antrim', 'Armagh', 'Cavan', 'Donegal', 'Down', 'Fermanagh', 'Derry', 'Monaghan', 'Tyrone'],
			countiesMunster: ['Clare', 'Cork', 'Kerry', 'Limerick', 'Tipperary', 'Waterford'],
			contaeU: ['Contae Aontroma', 'Contae Ard Mhacha', 'Contae an Chabháin', 'Contae Dhún na nGall', 'Contae an Dúin', 'Contae Fhear Manach', 'Contae Dhoire', 'Contae Mhuineacháin', 'Contae Thír Eoghain'],
			contaeC: ['Contae na Gaillimhe', 'Contae Liatroma', 'Contae Mhaigh Eo', 'Contae Ros Comáin', 'Contae Shligigh'],
			countiesConnacht:['Galway','Leitrim', 'Mayo', 'Roscommon', 'Sligo'],
			countiesLeinster:['Carlow','Dublin','Kildare','Kilkenny','Laois','Longford','Louth','Meath','Offaly','Westmeath','Wexford','Wicklow'],
			contaeL: ['Contae Cheatharlach', 'Contae Bhaile Átha Cliath', 'Contae Chill Dara', 'Contae Chill Chainnigh', 'Contae Laoise', 'Contae an Longfoirt', 'Contae Lú', 'Contae na Mí', 'Contae Uíbh Fhailí', 'Contae na hIarmhí', 'Contae Loch Garman', 'Contae Chill Mhantáin']


		}
	}
	render() {
		let countyHandler = this.props.countyHandler;
		return (<>
			<div className="counties"></div>



			{this.props.engMode ?

				<>
					{/* if english mode on show provinces counties in english */}

					<h1> {this.props.tallyX === 0 ? this.state.countiesMunster[this.props.tallyY] : null}</h1>

<h1> {this.props.tallyX === 1 ? this.state.countiesUlster[this.props.tallyY] : null}</h1>

<h1> {this.props.tallyX === 2 ? this.state.countiesConnacht[this.props.tallyY] : null}</h1>

<h1> {this.props.tallyX === 3 ? this.state.countiesLeinster[this.props.tallyY] : null}</h1>

				</> : <>

					{/* if english mode off, show province's counties in Irish  */}



					<h1> {this.props.tallyX === 1 ? this.state.contaeU[this.props.tallyY] : null}</h1>


					<h1> {this.props.tallyX === 2 ? this.state.contaeC[this.props.tallyY] : null}</h1>


					<h1> {this.props.tallyX === 3 ? this.state.contaeL[this.props.tallyY] : null}</h1>

					<h1> {this.props.tallyX === 0 ? this.state.contaeM[this.props.tallyY] : null}</h1>
					
				</>

			}

			<br />
			<br />
			<br />
			{/* <h3>{this.state.cuige[this.props.tallyX]}</h3> */}

			<div className={this.props.tallyX === 0 ? "counties-container" : 'hidden'} >
				<div className={this.props.tallyY === 0 ? "highlight-county clare-light" : "county-dark clare"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 1 ? "highlight-county cork-light" : "county-dark cork"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 2 ? "highlight-county kerry-light" : "county-dark kerry"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 3 ? "highlight-county limerick-light" : "county-dark limerick"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 4 ? "highlight-county tipperary-light" : "county-dark tipperary"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 5 ? "highlight-county waterford-light" : "county-dark waterford"} onClick={countyHandler} onTouchEnd={countyHandler}></div>

			</div>
			<div className={this.props.tallyX === 1 ? "counties-container" : 'hidden'} >


				< div className={this.props.tallyY === 0 ? "highlight-county antrim-light" : "county-dark antrim"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 1 ? "highlight-county armagh-light" : "county-dark armagh"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 2 ? "highlight-county cavan-light" : "county-dark cavan"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 3 ? "highlight-county donegal-light" : "county-dark donegal"} onClick={countyHandler} onTouchEnd={countyHandler} ></div >
				<div className={this.props.tallyY === 4 ? "highlight-county down-light" : "county-dark down"} onClick={countyHandler} onTouchEnd={countyHandler} ></div >
				<div className={this.props.tallyY === 5 ? "highlight-county fermanagh-light" : "county-dark fermanagh"} onClick={countyHandler} onTouchEnd={countyHandler} ></div >
				<div className={this.props.tallyY === 6 ? "highlight-county derry-light" : "county-dark derry"} onClick={countyHandler} onTouchEnd={countyHandler} ></div >
				<div className={this.props.tallyY === 7 ? "highlight-county monaghan-light" : "county-dark monaghan"} onClick={countyHandler} onTouchEnd={countyHandler} ></div >
				<div className={this.props.tallyY === 8 ? "highlight-county tyrone-light" : "county-dark tyrone"} id="" onClick={countyHandler} onTouchEnd={countyHandler} ></div >



			</div >


			<div className={this.props.tallyX === 3 ? "counties-container" : 'hidden'}>
				<div className={this.props.tallyY === 0 ? "highlight-county carlow-light" : "county-dark carlow"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 1 ? "highlight-county dublin-light" : "county-dark dublin"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 2 ? "highlight-county kildare-light" : "county-dark kildare"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 3 ? "highlight-county kilkenny-light" : "county-dark kilkenny"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 4 ? "highlight-county laois-light" : "county-dark laois"} id="" onClick={countyHandler} onTouchEnd={countyHandler}></div>

				<div className={this.props.tallyY === 5 ? "highlight-county longford-light" : "county-dark longford"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 6 ? "highlight-county louth-light" : "county-dark louth"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
			</div>
			<div className={this.props.tallyX === 3 ? "counties-container2" : 'hidden'} >
				<div className={this.props.tallyY === 7 ? "highlight-county meath-light" : "county-dark meath"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 8 ? "highlight-county offaly-light" : "county-dark offaly"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 9 ? "highlight-county westmeath-light" : "county-dark westmeath"} id="" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 10 ? "highlight-county wexford-light" : "county-dark wexford"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 11 ? "highlight-county wicklow-light" : "county-dark wicklow"} onClick={countyHandler} onTouchEnd={countyHandler}></div>


			</div>



			<div className={this.props.tallyX === 2 ? "counties-container" : 'hidden'} >
				<div className={this.props.tallyY === 0 ? "highlight-county galway-light" : "county-dark galway"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 1 ? "highlight-county leitrim-light" : "county-dark leitrim"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 2 ? "highlight-county mayo-light" : "county-dark mayo"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 3 ? "highlight-county roscommon-light" : "county-dark roscommon"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 4 ? "highlight-county sligo-light" : "county-dark sligo"} onClick={countyHandler} onTouchEnd={countyHandler}></div>

			</div>
			<div className={this.props.tallyB === 0 ? "character-county rogue" : null}></div>
			<div className={this.props.tallyB === 1 ? "character-county sage" : null}></div>
			<div className={this.props.tallyB === 2 ? "character-county poet" : null}></div>
			<div className={this.props.tallyB === 3 ? "character-county druid" : null}></div>
			<div className={this.props.tallyB === 4 ? "character-county gallowglass" : null}></div>
			<div className={this.props.tallyB === 5 ? "character-county detective" : null}></div>
			<div className={this.props.tallyB === 6 ? "character-county occultist" : null}></div>
			<div className={this.props.tallyB === 7 ? "character-county fenian" : null}></div>
		</>

		)
	}

}