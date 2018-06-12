import React, { Component } from 'react';
import { Navbar, Nav, NavItem,NavDropdown,MenuItem,FormControl,FormGroup,Button} from 'react-bootstrap';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Ask from './ask.js'

class Navigation extends Component {


	constructor(props) {
		super(props);
		this.state = { 
			
		};
	}

	render() {
		return (<MuiThemeProvider>
			<Navbar inverse collapseOnSelect style={{borderRadius:0,padding:5}} className="navbar-fixed-top">
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand"><span style={{color:'#fff',fontSize:35,fontFamily:'Kaushan Script'}}>Free4Error</span></a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
         Home
      </NavItem>
      <NavItem eventKey={2} href="#">
       Answer
      </NavItem>
       <NavItem eventKey={3} href="#">
       Your feeds
      </NavItem>
    </Nav>
	
	<Navbar.Form pullRight>
      <FormGroup>
        <FormControl type="text" placeholder="Search" />
      </FormGroup>
      <Button type="submit"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></Button>
	  <Ask />
    </Navbar.Form>
    
  </Navbar.Collapse>
</Navbar></MuiThemeProvider>
		);
	}
}

export default Navigation;