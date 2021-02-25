import React from 'react';
import './counties.css'
export class Counties extends React.Component {

	constructor() {
		super();
		this.state = {
			cuige: ['Mumhan', 'Uladh', 'Connacht', 'Laighean']
		}
	}
	render() {
		let countyHandler = this.props.countyHandler;
		return (<>

			<h2>tallyX: {this.props.tallyX}</h2>
			<div className={this.props.tallyX === 0 ? "counties-container" : 'hidden'} >
				<div className="county clare" onClick={countyHandler} onTouchEnd={countyHandler}></div><div className="county cork" onClick={countyHandler} onTouchEnd={countyHandler}></div><div className="county kerry" onClick={countyHandler} onTouchEnd={countyHandler}></div><div className="county limerick" onClick={countyHandler} onTouchEnd={countyHandler}></div><div className="county tipperary" onClick={countyHandler} onTouchEnd={countyHandler}></div><div className="county waterford" onClick={countyHandler} onTouchEnd={countyHandler}></div>

			</div>
			<div className={this.props.tallyX === 1 ? "counties-container" :'hidden'} >


				< div className="county antrim" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county armagh" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county cavan" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county donegal" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county down" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county fermanagh" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county derry" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county monaghan" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county tyrone" id="" onClick={countyHandler} onTouchEnd={countyHandler}></div>



			</div>


			<div className={this.props.tallyX === 3 ? "counties-container" : 'hidden'}>
				<div className="county carlow" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county dublin" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county kildare" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county kilkenny" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county laois" id="" onClick={countyHandler} onTouchEnd={countyHandler}></div>

				<div className="county longford" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county louth" onClick={countyHandler} onTouchEnd={countyHandler}></div>
			</div>
			<div className={this.props.tallyX === 3 ? "counties-container2" : 'hidden'} >
				<div className="county meath" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county offaly" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county westmeath" id="" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county wexford" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county wicklow" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county kilkenny" onClick={countyHandler} onTouchEnd={countyHandler}></div>

			</div>



			<div className={this.props.tallyX === 2 ? "counties-container" : 'hidden'} >
				<div className="county galway" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county leitrim" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county mayo" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county roscommon" onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className="county sligo" id="" onClick={countyHandler} onTouchEnd={countyHandler}></div>

			</div>

		</>

		)
	}

}