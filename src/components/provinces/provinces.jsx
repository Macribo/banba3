import React from 'react';
import "./provinces.css"
import {Redirect} from 'react-router-dom'
export class Provinces extends React.Component {

	constructor() {
		super();
		this.state = {
			redirectCounties:false
		}
	}
	render() {
		
		return (
		<>	{ this.props.redirectCounties ? (<Redirect push to="/counties" />) : null }
		{this.props.engMode?<h1>Choose Province</h1>:<h1>Roghnaigh Cúige</h1>}
		<div className="container">
			<div className={this.props.tallyX === 0? "province highlight-province munster" :"province-dark munster-dark"}></div>
			<div className={this.props.tallyX === 1? "province highlight-province ulster" :"province-dark ulster-dark"}></div>
			<div className={this.props.tallyX === 2? "province highlight-province connacht" :"province-dark connacht-dark"}></div>
			<div className={this.props.tallyX === 3? "province highlight-province leinster" :"province-dark leinster-dark"}></div>
			</div>
			<br/>
			{/* if engMode, show english name of selected province. else show Irish name. */}
			{this.props.engMode?<>
			{this.props.tallyX===0?<h2>Munster</h2>:null}
			{this.props.tallyX===1?<h2>Ulster</h2>:null}
			{this.props.tallyX===2?<h2>Connacht</h2>:null}
			{this.props.tallyX===3?<h2>Leinster</h2>:null}
			</>:<>
			{this.props.tallyX===0?<h2>Mumhan</h2>:null}
			{this.props.tallyX===1?<h2>Uladh</h2>:null}
			{this.props.tallyX===2?<h2>Connacht</h2>:null}
			{this.props.tallyX===3?<h2>Laighean</h2>:null}
			</>
			
			}
			</>
			)
	}

}