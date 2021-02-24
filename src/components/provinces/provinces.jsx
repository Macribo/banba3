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
		<h1>Provinces</h1>
		<div className="container">
			<div className={this.props.tallyX === 0? "province highlight" :"province"}>Mumhan</div>
			<div className={this.props.tallyX === 1? "province highlight" :"province"}>Uladh</div>
			<div className={this.props.tallyX === 2? "province highlight" :"province"}>Connacht</div>
			<div className={this.props.tallyX === 3? "province highlight" :"province"}>Laighean</div>
			</div></>
			)
	}

}