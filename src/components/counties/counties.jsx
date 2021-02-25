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
				<div className={this.props.tallyY === 0 ? "county clare-light" : "county clare"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={ this.props.tallyY===1? "county cork-light" :"county cork"}  onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={ this.props.tallyY===2? "county kerry-light" :"county kerry"}  onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={ this.props.tallyY===3? "county limerick-light" :"county limerick"}onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={ this.props.tallyY===4? "county tipperary-light" :"county tipperary"}  onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={ this.props.tallyY===5? "county waterford-light" :"county waterford"} onClick={countyHandler} onTouchEnd={countyHandler}></div>

			</div>
			<div className={this.props.tallyX === 1 ? "counties-container" : 'hidden'} >


				< div className={ this.props.tallyY===0? "county antrim-light" :"county antrim"} onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={ this.props.tallyY===1? "county armagh-light" :"county armagh"}  onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={ this.props.tallyY===2? "county cavan-light" :"county cavan"}  onClick={countyHandler} onTouchEnd={countyHandler}></div>
				<div className={ this.props.tallyY===3? "county donegal-light" :"county donegal"} onClick = { countyHandler } onTouchEnd = { countyHandler } ></div >
			<div className={this.props.tallyY === 4 ? "county down-light" : "county down"}  onClick = { countyHandler } onTouchEnd = { countyHandler } ></div >
				<div className={this.props.tallyY === 5 ? "county fermanagh-light" : "county fermanagh"} onClick = { countyHandler } onTouchEnd = { countyHandler } ></div >
					<div className={this.props.tallyY === 6 ? "county derry-light" : "county derry"} onClick = { countyHandler } onTouchEnd = { countyHandler } ></div >
						<div className={this.props.tallyY === 7 ? "county monaghan-light" : "county monaghan"} onClick = { countyHandler } onTouchEnd = { countyHandler } ></div >
							<div className={this.props.tallyY === 8 ? "county tyrone-light" : "county tyrone"} id = "" onClick = { countyHandler } onTouchEnd = { countyHandler } ></div >



			</div >


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