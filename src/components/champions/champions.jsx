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
			<>	{this.props.engMode ?
					<>
						{this.props.tallyB === 0 ? <h1>Rogue</h1> : null}
						{this.props.tallyB === 1 ? <h1>Troll</h1> : null}
						{this.props.tallyB === 2 ? <h1>Poet</h1> : null}
						{this.props.tallyB === 3 ? <h1>Druid</h1> : null}
						{this.props.tallyB === 4 ? <h1>Gallowglass</h1> : null}
						{this.props.tallyB === 5 ? <h1>Detective</h1> : null}
						{this.props.tallyB === 6 ? <h1>Occultist</h1> : null}
						{this.props.tallyB === 7 ? <h1>Fenian</h1> : null}
					</> :
					<>
						{this.props.tallyB === 0 ? <h1>Rógaire</h1> : null}
						{this.props.tallyB === 1 ? <h1>Bodach</h1> : null}
						{this.props.tallyB === 2 ? <h1>File</h1> : null}
						{this.props.tallyB === 3 ? <h1>Draoi</h1> : null}
						{this.props.tallyB === 4 ? <h1>Gallóglaċ</h1> : null}
						{this.props.tallyB === 5 ? <h1>Bleachtaire</h1> : null}
						{this.props.tallyB === 6 ? <h1>Diamhraí</h1> : null}
						{this.props.tallyB === 7 ? <h1>Fiann</h1> : null}
					</>}
				<div  className="container">
					<div id="champions"></div>
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
			
			</>
		)
	}

}