import React from 'react';
import "./provinces.css"
import { Redirect } from 'react-router-dom'
export class Provinces extends React.Component {

	constructor() {
		super();
		this.state = {
			redirectCounties: false
		}
	}
	render() {

		return (
			<>	{ this.props.redirectCounties ? (<Redirect push to="/counties" />) : null}
				{/* if engMode, show english name of selected province. else show Irish name. */}
				{this.props.engMode ? <>
					{this.props.tallyX === 0 ? <h1>Munster</h1> : null}
					{this.props.tallyX === 1 ? <h1>Ulster</h1> : null}
					{this.props.tallyX === 2 ? <h1>Connacht</h1> : null}
					{this.props.tallyX === 3 ? <h1>Leinster</h1> : null}
				</> : <>
					{this.props.tallyX === 0 ? <h1>Mumhan</h1> : null}
					{this.props.tallyX === 1 ? <h1>Uladh</h1> : null}
					{this.props.tallyX === 2 ? <h1>Connachta</h1> : null}
					{this.props.tallyX === 3 ? <h1>Laighean</h1> : null}
				</>

				}
				<div className="container provinces-container">
					<div className="provinces"></div>
					<div className={this.props.tallyX === 0 ? "province highlight-province munster" : "province-dark munster-dark"}></div>
					<div className={this.props.tallyX === 1 ? "province highlight-province ulster" : "province-dark ulster-dark"}></div>
					<div className={this.props.tallyX === 2 ? "province highlight-province connacht" : "province-dark connacht-dark"}></div>
					<div className={this.props.tallyX === 3 ? "province highlight-province leinster" : "province-dark leinster-dark"}></div>
				</div>
				<br />
				<div className={this.props.tallyB === 0 ? "character rogue" : null}></div>
				<div className={this.props.tallyB === 1 ? "character sage" : null}></div>
				<div className={this.props.tallyB === 2 ? "character poet" : null}></div>
				<div className={this.props.tallyB === 3 ? "character druid" : null}></div>
				<div className={this.props.tallyB === 4 ? "character gallowglass" : null}></div>
				<div className={this.props.tallyB === 5 ? "character detective" : null}></div>
				<div className={this.props.tallyB === 6 ? "character occultist" : null}></div>
				<div className={this.props.tallyB === 7 ? "character fenian" : null}></div>
			</>
		)
	}

}