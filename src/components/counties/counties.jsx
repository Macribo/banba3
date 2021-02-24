import React from 'react';

export class Counties extends React.Component {

	constructor() {
		super();
		this.state = {
			cuige : ['Mumhan','Uladh','Connacht','Laighean']
		}
	}
	render() {
		
		return (<h1>{this.state.cuige[this.props.tallyX]}</h1>
			
			)
	}

}