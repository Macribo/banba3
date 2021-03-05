import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './register.css';



	export function Register() {
		
		
		const [username, createUsername] = "";
		const [password, createPassword] = "";
		const [email, createEmail] = useState("");
	  
		// let bBtnReleased = true;
	  
	  
	  const handleSubmit = (e) => {
		  e.preventDefault();
	  
		  axios
			.post("https://evening-meadow-25071.herokuapp.com/users", {
			  Username: 'testUser0',
			  Password: '123456',
			  Email: 'testEmail@email.com'
			})
			.then((response) => {
			  const data = response.data;
			  alert("cúntas ginte! logál isteach chun leanúnt ar aghaidh.");
			  console.log(data);
			  window.open("/baile", 
			  "_self");
			})
			.catch(() => {
			  console.log("error registering the user");
			});
		};
		
	  
	  
		return (



		  <div>


		  <form>
        <label>
          First Name: <input type="text" />
        </label>
      </form>

		   <Container className="registration-container"  
		  >
			<Form className="registration-form">
			  <Form.Group controlId="formBasicUsername">
				<Form.Label>Ainm:</Form.Label>
				<Form.Control
				  type="text"
				  placeholder="cad is ainm dhuit?"
				  value= ""//{username}
				  onChange={(e) => {alert('change detected')}
				  
				  }
				/>
			  </Form.Group>
			  <Form.Group controlId="formBasicPassword">
				<Form.Label>Pasfhocal:</Form.Label>
				<Form.Control
				  type="password"
				  placeholder="focal faire"
				  value="123456"
				/>
			  </Form.Group>
			  <Form.Group controlId="formBasicEmail">
				<Form.Label>ɼ-post:</Form.Label>
				<Form.Control
				  type="email"
				  placeholder="seoladh ɼ-post"
				  value={email}
				  onChange={(e) => createEmail(e.target.value)}
				/>
	  
			  </Form.Group>
			  <Button className="btns"type="submit" onClick={handleSubmit}>
			  Glach le fianáin* & aighnigh 
			  </Button>{" "}
			  <Link to={"/"}>
				<Button className="btns">log isteach</Button>
			  </Link>
			</Form>
	  
		   </Container> 
	   
		
		   </div>
		   
		);
	  }
	  
























// 	constructor() {
// 		super();
// 		this.state = {
// 			cuige: ['Mumhan', 'Uladh', 'Connacht', 'Laighean'],
// 			contaeM: ['Contae an Chláir',  'Contae Chorcaí','Contae Chiarraí', 'Contae Luimnigh', 'Contae Thiobraid Árann','Contae Phort Láirge' ], 
// 			countiesUlster: ['Antrim', 'Armagh', 'Cavan', 'Donegal', 'Down', 'Fermanagh', 'Derry', 'Monaghan', 'Tyrone'],
// 			contaeU: ['Contae Aontroma', 'Contae Ard Mhacha', 'Contae an Chabháin', 'Contae Dhún na nGall', 'Contae an Dúin', 'Contae Fhear Manach', 'Contae Dhoire', 'Contae Mhuineacháin', 'Contae Thír Eoghain'],
// 			contaeC: ['Contae na Gaillimhe', 'Contae Liatroma', 'Contae Mhaigh Eo','Contae Ros Comáin','Contae Shligigh'],
// 			contaeL: ['Contae Cheatharlach','Contae Bhaile Átha Cliath',   'Contae Chill Dara', 'Contae Chill Chainnigh','Contae Laoise','Contae an Longfoirt','Contae Lú','Contae na Mí','Contae Uíbh Fhailí','Contae na hIarmhí', 'Contae Loch Garman','Contae Chill Mhantáin']
			

// 		}

// 	handleSubmit = (e) => {
// 		e.preventDefault();
// 		console.log(e);
// 	};
// 	}
// 	render() {
// let playerClass = 'rogue';
// let playerCounty = 'cavan'
// let playerName = ''
// return (<>

// 			{/* <h2> {this.state.cuige[this.props.tallyX]}</h2> */}
// 			<br/>
// 			<h2>Ainm:</h2>
// 			<form onSubmit={this.handleSubmit}>
//         <label>
//           Cad is ainm dhuit? 
// 	<br/>
// 	          <input type="text" onChange={this.handleClick} />        </label>
//         <input type="submit" value="is ainm dom" />
//       </form>
	
// 			<h3>tallyX:{this.props.tallyX}</h3>
// 			<h3>tallyY:{this.props.tallyB}</h3>
// 			<h3>tallyY:{this.props.tallyY}</h3>
// 			<br/>
// 			<h3> {this.props.tallyX===0? this.state.contaeM[this.props.tallyY]:null}</h3>

// 			<h3> {this.props.tallyX===1? this.state.contaeU[this.props.tallyY]:null}</h3>
// 			<h3> {this.props.tallyX===2? this.state.contaeC[this.props.tallyY]:null}</h3>
// 			<h3> {this.props.tallyX===3? this.state.contaeL[this.props.tallyY]:null}</h3>
			
// 		</>

// 		)
// 	}

// }