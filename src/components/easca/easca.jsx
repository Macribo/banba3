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
	
        <div className="btn-group btn-group-lg" id="c-line"role="group" aria-label="...">					
		
        <button type="button" id="" className="btn-right btn btn-outline-dark">ċ</button>
        <button type="button" id="" className="btn-left btn btn-outline-dark">ḃ</button>
        <button type="button" id="" className="btn-right btn btn-outline-dark"></button>			<button type="button" id="" className="btn-left btn btn-outline-dark">ṁ</button>
        <button type="button" id="" className="btn-right btn btn-outline-dark"></button>
        <button type="button" id=""  className="btn-left btn btn-outline-dark"></button>
        <button type="button" id="" className="btn-right btn btn-outline-dark">7</button>
    </div>
    <div className="btn-group btn-group-lg" id="shift-line"role="group" aria-label="...">					
        
        <button type="button" id="undo"className="btn-right btn btn-outline-dark">
            <i className="fa fa-undo"></i>
        </button>
        <button type="button" id="fada"className="btn-left btn btn-outline-dark">Ᵹ</button>
        <button type="button" className="space btn btn-outline-dark"> </button>
        
        <button type="button" className="btn-right btn btn-outline-dark"><i className="fa fa-arrow-right"></i></button>
    </div>
    
    
    
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
        <div id="caps-keyboard-container" className="">
            <div className="btn-group btn-group-lg" id="e-line"role="group" aria-label="...">					
                        <button type="button" id="" className="btn-right btn btn-outline-dark">E</button>
                        <button type="button" id="" className="btn-left btn btn-outline-dark">R</button>
                        <button type="button" id="" className="btn-right btn btn-outline-dark">T</button>
                        <button type="button" id="" className="btn-left btn btn-outline-dark">B</button>
                        <button type="button" id="" className="btn-right btn btn-outline-dark">I</button>
                        <button type="button" id="" className="btn-left btn btn-outline-dark">O</button>
                        <button type="button" id="" className="btn-right btn btn-outline-dark">P</button>
            </div>
            <div className="btn-group btn-group-lg" id="a-line"role="group" aria-label="...">					
            
            <button type="button" id="" className="btn-left btn btn-outline-dark">A</button>
            <button type="button" id="" className="btn-right btn btn-outline-dark">S</button>
            <button type="button" id="" className="btn-left btn btn-outline-dark">D</button>
            <button type="button" id="" className="btn-right btn btn-outline-dark">F</button>
            <button type="button" id="" className="btn-left btn btn-outline-dark">G</button>
            <button type="button" id="" className="btn-right btn btn-outline-dark">H</button>
            <button type="button" id="" className="btn-left btn btn-outline-dark">L</button>
    
    </div>
    <div className="btn-group btn-group-lg" id="c-line"role="group" aria-label="...">					
    
                        <button type="button" id=""  className="btn-right btn btn-outline-dark">C</button>
                        <button type="button" id=""  className="btn-left btn btn-outline-dark">B</button>
                        <button type="button" id=""  className="btn-right btn btn-outline-dark">N</button>
                        <button type="button" id=""  className="btn-left btn btn-outline-dark">M</button>
                        <button type="button" id=""  className="btn-right btn btn-outline-dark"></button>
                        <button type="button" id=""  className="btn-left btn btn-outline-dark"></button>
                        <button type="button" id=""  className="btn-right btn btn-outline-dark"></button>
                    </div>
                        <div className="btn-group btn-group-lg" id="shift-line"role="group" aria-label="...">					
                            
                            <button type="button" id="undo"className="btn-right btn btn-outline-dark">
                                <i className="fa fa-undo"></i>
                            </button>
                            <button type="button" id="fada"className="btn-left btn btn-outline-dark">Ᵹ</button>
                            <button type="button" className="space btn btn-outline-dark"> </button>
                            <button type="button" className="btn-left btn btn-outline-dark caps" id="copy" data-clipboard-target="#output">
                                    <i className="fa fa-copy"></i>
                            </button>
                            <button type="button" className="btn-right  btn btn-outline-dark"><i className="fa fa-arrow-right"></i></button>

                        </div>
        
        </div>

        <div id="" className="">
            <div className="btn-group btn-group-lg" id="j-line"role="group" aria-label="...">
 								
                    <button type="button" className="btn-right-logo btn btn-outline-dark">e</button>
                    <button type="button" className="btn-left-logo btn btn-outline-dark">a</button>
                    <button type="button" className="btn-right-logo btn btn-outline-dark">s</button>
                    <button type="button" className="btn-left-logo btn btn-outline-dark">c</button>	
                    <button type="button" className="btn-right-logo btn btn-outline-dark">a</button> -->
                </div>
        </div>
        </div>







            </>
		)
	}

}