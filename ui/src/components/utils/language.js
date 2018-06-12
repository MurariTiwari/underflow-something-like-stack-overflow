import React, { Component } from 'react';
import { Navbar, Nav, NavItem ,Col,Row,Image} from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './language.css';
class Language extends Component {


	constructor(props) {
		super(props);
		this.state = { 
			language:[]
		};
	}
   
	componentDidMount(){
	fetch('/lang',{
		method:'POST',
			headers: {
                       
                       'Content-Type': 'application/json'
                     },
			     body: JSON.stringify({'email':localStorage.getItem('email')})
		})
    .then(res=>res.json())
    .then(lang=>this.setState({language:lang}));	
	}
	
	update(name,e)
	{
	 fetch('/subscribe',{
		method:'POST',
			headers: {
                       
                       'Content-Type': 'application/json'
                     },
			     body: JSON.stringify({'lname':name,'email':localStorage.getItem('email')})
		})
	.then(res=>res.json())
	.then(lang=>this.setState({language:lang}));	
	
	}
	render() {
		
		console.log(this.state.language);
		
		return (<MuiThemeProvider>
			<div className="bio">
                   {this.state.language.map(language =>
					<Row>
						<Col xs={3} md={4} >
							<Image className="img" src={language.pic} width="80px" height="80px" rounded responsive style={{marginLeft:10}}/>
					    </Col>
					    <Col xs={9} md={8} style={{textAlign:'center'}}>
					    	<h3>{language.lname}</h3>
							 <RaisedButton label="Subscribe" backgroundColor="#00838f" labelColor="#fff" style={{marginBottom:4}} onClick={this.update.bind(this,language.lname)}/>
					    <hr/>
						</Col> 
						
					</Row>
					
					)}
				
			</div>
			</MuiThemeProvider>
		);
	}
}

export default Language;