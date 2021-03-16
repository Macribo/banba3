import React from 'react';
import './start-menu.css';
import {Button, ButtonGroup, Dropdown, DropdownButton} from 'react-bootstrap'
import $ from 'jquery';
export class StartMenu extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    jQueryCode = () => {
        let playerOverLocation = false;
	}
	componentDidMount(){
		this.jQueryCode()
	}
	
	conceptHandler=()=>{
		window.location.replace('http://167.172.184.73:3000/concept')
	}
	render(){
	
	return(
			<div >
			<ButtonGroup vertical>
  <Button onTouchEnd={this.conceptHandler}>concept</Button>
  <Button>log in</Button>
  {/* <Button>social media</Button> */}

{/* 
  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton> */}
{/* 
  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton> */}
</ButtonGroup>


			</div>
		)
	}
}