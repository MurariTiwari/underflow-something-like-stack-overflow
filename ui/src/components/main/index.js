import React, { Component } from 'react';
import { Navbar, Nav, NavItem ,Col,Row,Image,Grid} from 'react-bootstrap';
import Navigation from '../utils/navigation.js'
 import Profile from '../utils/profile.js'
import Question from '../utils/question.js'
import Language from '../utils/language.js'
import Answer from '../utils/answer.js'
class Main extends Component {


	constructor(props) {
		super(props);
		this.state = { 
			
		};
	}

	render() {
		
		var text=`
		constructor(props) {
		super(props);
		this.state = { 
			
		};
	}
`;
		return (
		
			<div >
            <Navigation/>
			<br/>
			<br/><br/>
			<br/>
			<Profile/>
			<Col xs={12} md={5}>
			<Question/>
			<Answer/>
			<code>{text}</code>
			<br/><br/>
			</Col>
			<Col  xs={12} md={3} >
			<Language/>
			</Col>
			</div>
		);
	}
}

export default Main;