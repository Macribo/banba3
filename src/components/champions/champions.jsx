import React from 'react';
import "./champions.css"

export class Champions extends React.Component {

	constructor() {
		super();
		this.state = {

		}
	}
	render() {

		return (
			<>{this.props.engMode ? <h1>Choose a Champion</h1> : <h1>Roghnaigh Tuairghneach</h1>}
				<div className="container">
					<div className={this.props.tallyB === 0 ? "champion rogue highlight-champ" : "champion rogue "}></div>
					<div className={this.props.tallyB === 1 ? "champion sage highlight-champ" : "champion sage "}></div>
					<div className={this.props.tallyB === 2 ? "champion poet highlight-champ" : "champion poet "}></div>
					<div className={this.props.tallyB === 3 ? "champion druid highlight-champ" : "champion druid"}></div>
				</div>

				<div className="container">

					<div className={this.props.tallyB === 4 ? "champion gallowglass highlight-champ" : "champion gallowglass"}></div>
					<div className={this.props.tallyB === 5 ? "champion detective highlight-champ" : "champion detective"}></div>
					<div className={this.props.tallyB === 6 ? "champion occultist highlight-champ" : "champion occultist"}></div>
					<div className={this.props.tallyB === 7 ? "champion fenian highlight-champ" : "champion fenian"}></div>

				</div>
				{this.props.engMode ?
					<>
						{this.props.tallyB === 0 ? <h2>Rogue</h2> : null}
						{this.props.tallyB === 1 ? <h2>Sage</h2> : null}
						{this.props.tallyB === 2 ? <h2>Poet</h2> : null}
						{this.props.tallyB === 3 ? <h2>Druid</h2> : null}
						{this.props.tallyB === 4 ? <h2>Gallowglass</h2> : null}
						{this.props.tallyB === 5 ? <h2>Detective</h2> : null}
						{this.props.tallyB === 6 ? <h2>Occultist</h2> : null}
						{this.props.tallyB === 7 ? <h2>Fenian</h2> : null}
					</> :
					<>
						{this.props.tallyB === 0 ? <h2>Rógaire</h2> : null}
						{this.props.tallyB === 1 ? <h2>Saoi</h2> : null}
						{this.props.tallyB === 2 ? <h2>File</h2> : null}
						{this.props.tallyB === 3 ? <h2>Draoi</h2> : null}
						{this.props.tallyB === 4 ? <h2>Gallóglaċ</h2> : null}
						{this.props.tallyB === 5 ? <h2>Bleachtaire</h2> : null}
						{this.props.tallyB === 6 ? <h2>Diamhraí</h2> : null}
						{this.props.tallyB === 7 ? <h2>Fiann</h2> : null}
					</>}
			</>
		)
	}

}