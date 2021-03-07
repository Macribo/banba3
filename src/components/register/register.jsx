import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './register.css';



export function Register(props) {

	const handleCookiesPol = () => {
		alert(
			`Tá fianáin in úsáid chun fógraí agus ábhar a chuir in oirrúnt dhuit, chun ionchra mean sócíalta a chuir in oirrúnt agus chun analísú a deanamh ar an trácht.
Chuidíonn chuid dos na fianáin le arrachtaí forbairt a chuir an an suíomh, deisana ioncuir a roinnt, agus chuidú len ár niarrachtaí maragíochta agus gnó. Tá Rialachá Gineralta Cosaint Sonraí an tAontas Eorpach á leannúnt (RGCS) agus ní roinnfar do chuid sonraí teaghbáile ríamh.
Leigh le do thoil <span className="cookies-pol">ár polaisaithe</span> i gcomhair tuilleadh sonraí. 
      
      We use cookies to personalize content and ads, to provide social media features and to analyze our traffic.
Some of these cookies also help imprrove your user experience on our websites, assist with navigation and your ability to provide feedback, and assist with our promotional and marketing efforts. Please read <span className="cookies-pol">our cookie policy</span> for a more detailed description and click on the settings button to customize how the site uses cookies for you. We are following the European Union General Data Protection Regulation (GDPR) and we don't share  user contact data.`


		)
	}
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
const [pleaseWait, setPleaseWait] = useState(false);

	const handleSubmit = (e) => {
		setPleaseWait(true)
		console.log('please wait? '+ pleaseWait)
		e.preventDefault();

		axios
			.post("https://evening-meadow-25071.herokuapp.com/users", {
				Username: username,
				Password: password,
				Email: email
			})
			.then((response) => {
				const data = response.data;
				alert("cúntas ginte! logál isteach chun leanúnt ar aghaidh.");
				console.log(data);
				window.open("/baile",
					"_self");
			})
			.catch(() => {
				alert('Érɼor 3rráid!')
				window.open("/",
				"_self");
				console.log("error registering the user");
			});
	};

	return (



		<div>

			<h2>{props.tallyA}</h2>
			<h2>{props.tallyX}</h2>

			<Container className="registration-container"
			>
				<Form className="registration-form">
					<Form.Group controlId="formBasicUsername">
						<Form.Label>Ainm:</Form.Label>
						<Form.Control
							type="text"
							placeholder="cad is ainm dhuit?"
							value={username}
							onChange={(e) => setUsername(e.target.value)
							}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label>Pasfhocal:</Form.Label>
						<input
							type="password"
							placeholder={props.engMode ? 'whisper...' : 'cogar...'}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>ɼ-post:</Form.Label>
						<input
							type="email"
							placeholder="tusa@r-post.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>
					<Button className="btns" type="submit" onClick={handleSubmit}>
						{props.engMode ? 'Accept cookies and submit' : ' Glach le fianáin & aighnigh'}
					</Button>{" "}
					<> <Link to={"/login"}>
						<Button className="btns">			  {props.engMode ? 'log in' : 'log isteach'}</Button>
					</Link><p>{props.engMode ? 'already registered?' : 'cláraithe cheana féin?'}</p>
					</></Form>

			</Container>
			<div onClick={handleCookiesPol}>*{props.engMode ? 'our cookies policy' : 'ár polasaithe fianáin'}
			</div>

		{pleaseWait ?	<div className="please-wait container">
				<div style={{ "top": "-16%", "position": "relative" }}>
					<h2>feitheamh, -thmhe, f., act of watching, waiting</h2><br /><h2>
						feitheamhantas, -ais, m., longing, suffering, endurance, patience, delay, waiting.</h2>
				</div></div>			:null}
		</div>

	);
}


