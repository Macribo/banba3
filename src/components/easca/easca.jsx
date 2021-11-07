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

    
    
    
        <div id="keyboard-container" className="">
            <div className="btn-group btn-group-lg" id="e-line"role="group" aria-label="...">					
                        <button type="button" id="e" className="btn btn-right btn-outline-dark">e</button>
                        <button type="button" id="r" className="btn-left btn btn-outline-dark">r</button>
                        <button type="button" id="t" className="btn btn-right btn-outline-dark">t</button>
                        <button type="button" id="u" className="btn-left btn btn-outline-dark">u</button>
                        <button type="button" id="i" className="btn btn-right btn-outline-dark">i</button>
                        <button type="button" id="o" className="btn-left btn btn-outline-dark">o</button>
                        <button type="button" id="p" className="btn btn-right btn-outline-dark">p</button>
            </div>
            <div className="btn-group btn-group-lg" id="a-line"role="group" aria-label="...">					
            
            <button type="button" id="a" className="btn-left btn btn-outline-dark">a</button>
            <button type="button"id="s"  className="btn btn-right btn-outline-dark">s</button>
            <button type="button"id="d"  className="btn-left btn btn-outline-dark">d</button>
            <button type="button"id="f"  className="btn-right btn btn-outline-dark">f</button>
            <button type="button"id="g"  className="btn-left btn btn-outline-dark">g</button>
            <button type="button"id="h"  className="btn-right btn btn-outline-dark">h</button>
            <button type="button"id="l"  className="btn-left btn btn-outline-dark">l</button>
    
    </div>
    <div className="btn-group btn-group-lg" id="c-line"role="group" aria-label="...">					
    
                        <button type="button" id="c" className="btn-right btn btn-outline-dark">c</button>
                        <button type="button" id="b" className="btn-left btn btn-outline-dark">b</button>
                        <button type="button" id="n" className="btn-right btn btn-outline-dark">n</button>
                        <button type="button" id="m" className="btn-left btn btn-outline-dark">m</button>
                        <button type="button" id="," className="btn-right btn btn-outline-dark">,</button>
                        <button type="button" id="." className="btn-left btn btn-outline-dark">.</button>
                        <button type="button" id="?" className="btn-right btn btn-outline-dark">?/!</button>
                    </div>
                        <div className="btn-group btn-group-lg" id="shift-line"role="group" aria-label="...">					
                            
                            <button type="button" id="undo"className="btn-right btn btn-outline-dark">
                                <i className="fa fa-undo"></i>
                            </button>
                            <button type="button" id="fada"className="btn-left btn btn-outline-dark">Ᵹ</button>
                            <button type="button" className="btn space btn-outline-dark"> </button>
                            <button type="button" id="copy"
                            data-clipboard-target="#output"
                            className="btn-right btn btn-outline-dark">
                            <i className="fa fa-copy"></i>

                            </button>
                            <button type="button" className="btn-left btn btn-outline-dark"><i className="fa fa-arrow-right"></i></button>

                        </div>
        
        </div>
      








            </>
		)
	}

}