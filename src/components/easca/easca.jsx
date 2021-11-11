/* eslint-disable no-sparse-arrays */
import React from 'react';
import './easca.css'
import $ from 'jquery';
import { Col, Row, Button ,BtnGroup } from 'react-bootstrap'
import { Redirect } from "react-router-dom";



export default class Easca extends React.Component {
    constructor() {
        super();
        this.state = {
            redirect:null
        }
    }
    
    componentDidMount() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
    }


    goCd= () =>{
this.setState({redirect:'cd'})
        
    }

	render(){
		return(
            <>

            {this.state.redirect === 'cd'? <Redirect to={this.state.redirect} />:null}
          




            <h2 id="output"></h2>

    
    
    
        <div id="keyboard-container" className="">
            <div className="BtnGroup BtnGroup-lg" id="e-line"role="group" aria-label="...">					
                        <button type="button" id="e" className="btn btn-right">e</button>
                        <button type="button" id="r" className="btn-left btn ">r</button>
                        <button type="button" id="t" className="btn btn-right ">t</button>
                        <button type="button" id="u" className="btn-left btn ">u</button>
                        <button type="button" id="i" className="btn btn-right ">i</button>
                        <button type="button" id="o" className="btn-left btn ">o</button>
                        <button type="button" id="p" className="btn btn-right ">p</button>
            </div>
            <div className="BtnGroup BtnGroup-lg" id="a-line"role="group" aria-label="...">					
            
            <button type="button" id="a" className="btn-left btn ">a</button>
            <button type="button"id="s"  className="btn btn-right ">s</button>
            <button type="button"id="d"  className="btn-left btn ">d</button>
            <button type="button"id="f"  className="btn-right btn ">f</button>
            <button type="button"id="g"  className="btn-left btn ">g</button>
            <button type="button"id="h"  className="btn-right btn ">h</button>
            <button type="button"id="l"  className="btn-left btn " 
                onMouseUp={this.props.incrementStory} onTouchEnd={ this.goCd}
            >l</button>
    
    </div>
    <div className="BtnGroup BtnGroup-lg" id="c-line"role="group" aria-label="...">					
    
                        <button type="button" id="c" className="btn-right btn ">c</button>
                        <button type="button" id="b" className="btn-left btn ">b</button>
                        <button type="button" id="n" className="btn-right btn ">n</button>
                        <button type="button" id="m" className="btn-left btn ">m</button>
                        <button type="button" id="," className="btn-right btn ">,</button>
                        <button type="button" id="." className="btn-left btn ">.</button>
                        <button type="button" id="?" className="btn-right btn ">?/!</button>
                    </div>
                      
        </div>
      








            </>
		)
	}

}