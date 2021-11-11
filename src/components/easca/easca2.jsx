
/* eslint-disable no-sparse-arrays */
import React from 'react';
import './easca.css'
import $ from 'jquery';
import { Col, Row, Button ,BtnGroup } from 'react-bootstrap'



export default class Easca extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    
    componentDidMount() {
     
    }

	render(){
		return(
            <>

                




<div className="btn-group btn-group-lg" id="shift-line"role="group" aria-label="...">					
                            
                            <button type="button" id="undo"className="btn-right btn " onClick= {function(){alert('ceart!')}}>cd
                            </button>
                            <button type="button" id="fada"className="btn-left btn ">ls</button>
                            <button type="button" className="btn btn-right ">mv</button>
                            <button type="button" 
                            className="btn-left btn ">
                           pwd
                            </button>
                            <button type="button" className="btn-right btn ">rm</button>

                        </div>
        </>)
		}
	}