import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Col,Row,ControlLabel,FormControl,Button,FormGroup} from 'react-bootstrap';
import Divider from 'material-ui/Divider';
export default class Ask extends React.Component {
  state = {
     open: false,
	 que:"",
	 lang:"",
	 img:"",
     git:"",
	 utube:"",
	 ok:true,
	 key1:"",
	 key2:"",				   
  };
   
  handleEnable=()=>{
	  console.log("we are here");
	  console.log(this.state.lang);
	if(this.state.que!=""&&this.state.lang!=""&&this.state.key1!=""&&this.state.key2!="")
    this.setState({ok:false});		
  };
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false,
	              
	});
  };
fileSelectedHandler=(event)=>{
		  console.log(event.target.files[0].name);
		  this.setState({
			  img:event.target.files[0].name
		  });
	  };
  render() {
	 
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={this.state.ok}
      
      />,
    ];

    return (
      <span>
        <RaisedButton label="Report Error" onClick={this.handleOpen} style={{backgroundColor:'#fff',marginLeft:10,borderRadius:10,padding:2,fontSize:10}} />
        <Dialog
          title="Report the BUG"
          actions={actions}
          modal={true}
          open={this.state.open}
		   autoScrollBodyContent={true}
        >
          <br/>
			<form  style={{backgroundColor:'#EDE7F6',color:'#00838f',padding:15}}>	 
		    <br/>
		        <ControlLabel>Question*</ControlLabel>
				  <FormControl
                   componentClass="textarea"
                   placeholder="Enter Question"
				   style={{resize:'none'}}
				    onChange={e => this.setState({ que: e.target.value })}
					onMouseLeave={this.handleEnable}
                   />
			<br/>
			<FormGroup controlId="formControlsSelect">
                 <ControlLabel>Languages *</ControlLabel>
               <FormControl componentClass="select" placeholder="select">
                 <option value="select">c</option>
                  <option value="other">...</option>
				   onChange={e => this.setState({ lang: e.target.value })}
				   onMouseLeave={this.handleEnable}
                </FormControl>
               </FormGroup>
				<Divider/>
				<br/>
				 <ControlLabel>Error Screenshot</ControlLabel>
				  <FormControl
				    type="file"
                   id="formControlsFile"
				    onChange={this.fileSelectedHandler}
                /><br/>
				<RaisedButton label="Upload" />
				<br/><br/>
				<Divider/>
				<br/>
				<ControlLabel>Github</ControlLabel>
				  <FormControl
                   type="text"
                   placeholder="Enter url"
				    onChange={e => this.setState({ git: e.target.value })}
				 />
		    <br/>
		        <ControlLabel>Youtube</ControlLabel>
				  <FormControl
				    type="text"
                   placeholder="Enter url"
                    onChange={e => this.setState({ utube: e.target.value })}
                /><br/>
				 <ControlLabel>Keyword 1 *</ControlLabel>
				  <FormControl
				    type="text"
                   placeholder="Enter keyword it will be helpfull in searching"
                    onChange={e => this.setState({key1: e.target.value })}
					onMouseLeave={this.handleEnable}
                /><br/>
				<ControlLabel>Keyword 2 *</ControlLabel>
				  <FormControl
				    type="text"
                   placeholder="Enter keyword it will be helpfull in searching"
                    onChange={e => this.setState({ key2: e.target.value })}
					onMouseLeave={this.handleEnable}
                /><br/>
	              <FormGroup>
                     <FormControl.Static>* Indicates required field</FormControl.Static>
                  </FormGroup>
	
		    <br/>
		  </form>
         
        </Dialog>
      </span>
    );
  }
}