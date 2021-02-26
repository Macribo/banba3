import React from 'react';
import './counties.css'
export class Counties extends React.Component {

	constructor() {
		super();
		this.state = {
			cuige: ['Mumhan', 'Uladh', 'Connacht', 'Laighean'],
			contaeM: ['Contae an Chláir',  'Contae Chorcaí','Contae Chiarraí', 'Contae Luimnigh', 'Contae Thiobraid Árann','Contae Phort Láirge' ], 
			countiesUlster: ['Antrim', 'Armagh', 'Cavan', 'Donegal', 'Down', 'Fermanagh', 'Derry', 'Monaghan', 'Tyrone'],
			contaeU: ['Contae Aontroma', 'Contae Ard Mhacha', 'Contae an Chabháin', 'Contae Dhún na nGall', 'Contae an Dúin', 'Contae Fhear Manach', 'Contae Dhoire', 'Contae Mhuineacháin', 'Contae Thír Eoghain'],
			contaeC: ['Contae na Gaillimhe', 'Contae Liatroma', 'Contae Mhaigh Eo','Contae Ros Comáin','Contae Shligigh'],
			contaeL: ['Contae Cheatharlach','Contae Bhaile Átha Cliath',   'Contae Chill Dara', 'Contae Chill Chainnigh','Contae Laoise','Contae an Longfoirt','Contae Lú','Contae na Mí','Contae Uíbh Fhailí','Contae na hIarmhí', 'Contae Loch Garman','Contae Chill Mhantáin']
			

		}
	}
	render() {
		let countyHandler = this.props.countyHandler;
		return (<>

			<h2> {this.state.cuige[this.props.tallyX]}</h2>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<h3> {this.props.tallyX===0? this.state.contaeM[this.props.tallyY]:null}</h3>

			<h3> {this.props.tallyX===1? this.state.contaeU[this.props.tallyY]:null}</h3>
			<h3> {this.props.tallyX===2? this.state.contaeC[this.props.tallyY]:null}</h3>
			<h3> {this.props.tallyX===3? this.state.contaeL[this.props.tallyY]:null}</h3>
			<div className={this.props.tallyX === 0 ? "counties-container" : 'hidden'} >
				<div className={this.props.tallyY === 0 ? "county clare-light" : "county-dark clare"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 1 ? "county cork-light" : "county-dark cork"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 2 ? "county kerry-light" : "county-dark kerry"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 3 ? "county limerick-light" : "county-dark limerick"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 4 ? "county tipperary-light" : "county-dark tipperary"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 5 ? "county waterford-light" : "county-dark waterford"} onClick={countyHandler} onTouchEnd={countyHandler}></div>

			</div>
			<div className={this.props.tallyX === 1 ? "counties-container" : 'hidden'} >


				< div className={this.props.tallyY === 0 ? "county antrim-light" : "county-dark antrim"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 1 ? "county armagh-light" : "county-dark armagh"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 2 ? "county cavan-light" : "county-dark cavan"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 3 ? "county donegal-light" : "county-dark donegal"} onClick={countyHandler} onTouchEnd={countyHandler} ></div >
				<div className={this.props.tallyY === 4 ? "county down-light" : "county-dark down"} onClick={countyHandler} onTouchEnd={countyHandler} ></div >
				<div className={this.props.tallyY === 5 ? "county fermanagh-light" : "county-dark fermanagh"} onClick={countyHandler} onTouchEnd={countyHandler} ></div >
				<div className={this.props.tallyY === 6 ? "county derry-light" : "county-dark derry"} onClick={countyHandler} onTouchEnd={countyHandler} ></div >
				<div className={this.props.tallyY === 7 ? "county monaghan-light" : "county-dark monaghan"} onClick={countyHandler} onTouchEnd={countyHandler} ></div >
				<div className={this.props.tallyY === 8 ? "county tyrone-light" : "county-dark tyrone"} id="" onClick={countyHandler} onTouchEnd={countyHandler} ></div >



			</div >


			<div className={this.props.tallyX === 3 ? "counties-container" : 'hidden'}>
				<div className={this.props.tallyY === 0 ? "county carlow-light" : "county-dark carlow"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 1 ? "county dublin-light" : "county-dark dublin"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 2 ? "county kildare-light" : "county-dark kildare"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 3 ? "county kilkenny-light" : "county-dark kilkenny"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 4 ? "county laois-light" : "county-dark laois"} id="" onClick={countyHandler} onTouchEnd={countyHandler}></div>

				<div className={this.props.tallyY === 5 ? "county longford-light" : "county-dark longford"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 6 ? "county louth-light" : "county-dark louth"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
			</div>
			<div className={this.props.tallyX === 3 ? "counties-container2" : 'hidden'} >
				<div className={this.props.tallyY === 7 ? "county meath-light" : "county-dark meath"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 8 ? "county offaly-light" : "county-dark offaly"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 9 ? "county westmeath-light" : "county-dark westmeath"} id="" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 10 ? "county wexford-light" : "county-dark wexford"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 11 ? "county wicklow-light" : "county-dark wicklow"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				

			</div>



			<div className={this.props.tallyX === 2 ? "counties-container" : 'hidden'} >
				<div className={this.props.tallyY === 0 ? "county galway-light" : "county-dark galway"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 1 ? "county leitrim-light" : "county-dark leitrim"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 2 ? "county mayo-light" : "county-dark mayo"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 3 ? "county roscommon-light" : "county-dark roscommon"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 4 ? "county sligo-light" : "county-dark sligo"} onClick={countyHandler} onTouchEnd={countyHandler}></div>

			</div>

		</>

		)
	}

}