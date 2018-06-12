import React, { Component } from 'react';
import { Navbar, Nav, NavItem ,Col,Row,Image} from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GoogleLogin from 'react-google-login';
import Snackbar from 'material-ui/Snackbar';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';


import './profile.css';
class Profile extends Component {

// Constructor
	constructor(props) {
		super(props);
		this.state = { 
			email:"unknown1234@gmail.com",
			pic:"http://www.gsfdcy.com/data/img/92/2219061-unknown-wallpaper.jpg",
			name:"UnKnown",
			subscribed:[],
			token:"",
			open: false,
			
			msg:"",
		};
	}

	
//	Set open to false for the snakebar
	handleRequestClose = () => {
    this.setState({
      open: false,
    });
    };

   
// component did mount function for checking if session is maintained

componentDidMount()
{
	fetch('/login',{
		method:'POST',
			headers: {
                       
                       'Content-Type': 'application/json'
                     },
			     body: JSON.stringify({'email': localStorage.getItem('email')})
		})
	.then(res=>res.json())
	.then(pro=>this.setState({email:pro.email,name:pro.name,pic:pro.pic}));
	
}   
   
	
// render function	
	render() {
		
		
		// if no data is returned by google
		 const responseGoogle = (response) => {
            this.setState({
			msg:"Try again ",open:true
			});
            }
	   
	 
	    // if signUp button is clicked
	   const signUp=(response)=>{
		this.setState({
				email:response.profileObj.email,
				name:response.profileObj.name,
				pic:response.profileObj.imageUrl,
				token: response.profileObj.tokenId
			});
		
		fetch('/signup',{
			method:'POST',
			headers: {
                       
                       'Content-Type': 'application/json'
                     },
			     body: JSON.stringify(this.state)
		})
		.then(res=>res.json())
		.then((msg)=>{this.setState({msg:msg.msg,open:true})})
		localStorage.setItem('email',this.state.email);
		}
		
		
		//if signIn button is clicked
		 const signIn=(response)=>{
		this.setState({
				email:response.profileObj.email,
				name:response.profileObj.name,
				pic:response.profileObj.imageUrl,
				token: response.profileObj.tokenId
			});
		
		fetch('/signin',{
			method:'POST',
			headers: {
                       
                       'Content-Type': 'application/json'
                     },
			     body: JSON.stringify(this.state)
		})
		.then(res=>res.json())
		.then((msg)=>{this.setState({msg:msg.msg,open:true})})
		localStorage.setItem('email',this.state.email);
		}
		
		
	   // renering the profile component
	    return (<MuiThemeProvider>
			<div className="App">
                   <Col className="bio1" xs={12} md={3} >
					<Row>
						<Col xs={3} md={4} >
							<Image className="img" src={this.state.pic} rounded responsive />
					    </Col>
					    <Col xs={9} md={8}>
					    	<h3>{this.state.name}</h3>
					    	<p>{this.state.email}</p>
							<hr/>
							
							<GoogleLogin
                             clientId="662540793075-fbthrk9mp15vjadfghjmlcgonpdh2310.apps.googleusercontent.com"
                                  buttonText="SignIn"
                                  onSuccess={signIn}
                                  onFailure={responseGoogle}
								  style={{backgroundColor:'#00838f',color:'#fff',fontSize:20,borderRadius:10,paddingLeft:10,paddingRight:10}}
                               />
							   <GoogleLogin
                             clientId="662540793075-fbthrk9mp15vjadfghjmlcgonpdh2310.apps.googleusercontent.com"
                                  buttonText="SignUp"
                                  onSuccess={signUp}
                                  onFailure={responseGoogle}
								  style={{backgroundColor:'#00838f',color:'#fff',fontSize:20,borderRadius:10,paddingLeft:10,paddingRight:10,marginLeft:4}}
                               />
							  
					    </Col> 
					</Row>
					
					
					 <hr/>
					
					   
 
  
  
			    </Col>
			<Snackbar
          open={this.state.open}
          message={this.state.msg}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />	
			</div>
			</MuiThemeProvider>
		);
		
	}
	
}

export default Profile;