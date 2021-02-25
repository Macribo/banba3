import React from 'react';
import './counties.css'
export class Counties extends React.Component {

	constructor() {
		super();
		this.state = {
			cuige: ['Mumhan', 'Uladh', 'Connacht', 'Laighean'],
			contaeM: [''], 
			countiesUlster: ['Antrim', 'Armagh', 'Cavan', 'Donegal', 'Down', 'Fermanagh', 'Derry', 'Monaghan', 'Tyrone'],
			contaeU: ['Contae Aontroma', 'Contae Ard Mhacha', 'Contae an Chabháin', 'Contae Dhún na nGall', 'Contae an Dúin', 'Contae Fhear Manach', 'Contae Dhoire', 'Contae Mhuineacháin', 'Contae Thír Eoghain'],
			contaeC: [''],
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
			<h3> {this.props.tallyX===1? this.state.contaeU[this.props.tallyY]:null}</h3>
			<h3> {this.props.tallyX===3? this.state.contaeL[this.props.tallyY]:null}</h3>
			<div className={this.props.tallyX === 0 ? "counties-container" : 'hidden'} >
				<div className={this.props.tallyY === 0 ? "county clare-light" : "county clare"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 1 ? "county cork-light" : "county cork"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 2 ? "county kerry-light" : "county kerry"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 3 ? "county limerick-light" : "county limerick"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 4 ? "county tipperary-light" : "county tipperary"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 5 ? "county waterford-light" : "county waterford"} onClick={countyHandler} onTouchEnd={countyHandler}></div>

			</div>
			<div className={this.props.tallyX === 1 ? "counties-container" : 'hidden'} >


				< div className={this.props.tallyY === 0 ? "county antrim-light" : "county antrim"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 1 ? "county armagh-light" : "county armagh"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 2 ? "county cavan-light" : "county cavan"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 3 ? "county donegal-light" : "county donegal"} onClick={countyHandler} onTouchEnd={countyHandler} ></div >
				<div className={this.props.tallyY === 4 ? "county down-light" : "county down"} onClick={countyHandler} onTouchEnd={countyHandler} ></div >
				<div className={this.props.tallyY === 5 ? "county fermanagh-light" : "county fermanagh"} onClick={countyHandler} onTouchEnd={countyHandler} ></div >
				<div className={this.props.tallyY === 6 ? "county derry-light" : "county derry"} onClick={countyHandler} onTouchEnd={countyHandler} ></div >
				<div className={this.props.tallyY === 7 ? "county monaghan-light" : "county monaghan"} onClick={countyHandler} onTouchEnd={countyHandler} ></div >
				<div className={this.props.tallyY === 8 ? "county tyrone-light" : "county tyrone"} id="" onClick={countyHandler} onTouchEnd={countyHandler} ></div >



			</div >


			<div className={this.props.tallyX === 3 ? "counties-container" : 'hidden'}>
				<div className={this.props.tallyY === 0 ? "county carlow-light" : "county carlow"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 1 ? "county dublin-light" : "county dublin"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 2 ? "county kildare-light" : "county kildare"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 3 ? "county kilkenny-light" : "county kilkenny"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 4 ? "county laois-light" : "county laois"} id="" onClick={countyHandler} onTouchEnd={countyHandler}></div>

				<div className={this.props.tallyY === 5 ? "county longford-light" : "county longford"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 6 ? "county louth-light" : "county louth"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
			</div>
			<div className={this.props.tallyX === 3 ? "counties-container2" : 'hidden'} >
				<div className={this.props.tallyY === 7 ? "county meath-light" : "county meath"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 8 ? "county offaly-light" : "county offaly"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 9 ? "county westmeath-light" : "county westmeath"} id="" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 10 ? "county wexford-light" : "county wexford"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 11 ? "county wicklow-light" : "county wicklow"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				

			</div>



			<div className={this.props.tallyX === 2 ? "counties-container" : 'hidden'} >
				<div className={this.props.tallyY === 0 ? "county galway-light" : "county galway"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 1 ? "county leitrim-light" : "county leitrim"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 2 ? "county mayo-light" : "county mayo"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 3 ? "county roscommon-light" : "county roscommon"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={this.props.tallyY === 4 ? "county sligo-light" : "county sligo"} onClick={countyHandler} onTouchEnd={countyHandler}></div>

			</div>

		</>

		)
	}

}