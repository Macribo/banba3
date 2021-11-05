/* eslint-disable no-sparse-arrays */
import React from 'react';
import './easca.css'
import $ from 'jquery';
import { Col, Row, Button } from 'react-bootstrap'



export default class Easca extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    jQueryCode = () => {

        
    }
    componentDidMount() {
        this.jQueryCode();
     
    }

	render(){
		return(
            <>

                




            <h2 id="output"></h2>

            <div id="fada-mode" className="">
			<div className="btn-group btn-group-lg" id="e-line"role="group" aria-label="...">					
				<button type="button" id="" className="btn-right btn btn-outline-dark">é</button>
						<button type="button" id="" className="btn-left btn btn-outline-dark">ꞃ</button>
						<button type="button" id="" className="btn-right btn btn-outline-dark">ṫ</button>
						<button type="button" id="" className="btn btn-left btn-outline-dark">ú</button>
						<button type="button" id="" className="btn-right btn btn-outline-dark">í</button>
						<button type="button" id="" className="btn btn-left btn-outline-dark">ó</button>
						<button type="button" id="" className="btn-right btn btn-outline-dark">ṗ</button>
			</div>
			<div className="btn-group btn-group-lg" id="a-line"role="group" aria-label="...">					
			
			<button type="button" id="" className="btn-left btn btn-outline-dark">á</button>
			<button type="button" id="" className="btn-right btn btn-outline-dark">ṡ</button>
			<button type="button" id="" className="btn-left btn btn-outline-dark">ḋ</button>
			<button type="button" id="" className="btn-right btn btn-outline-dark">ḟ</button>
			<button type="button" id="" className="btn-left btn btn-outline-dark">ġ</button>
			<button type="button" id="" className="btn-right btn btn-outline-dark"></button>
			<button type="button" id="" className="btn-left btn btn-outline-dark"></button>
	
		</div>
		</div>

            </>
		)
	}

}