import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Drop from './drop.svg'
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
const style = {
  width: '100%',
  display: 'inline-block',
  
};

class Main extends React.Component
{ 


 render()
	{ 
    return	(
  <div>
  <MuiThemeProvider>
    <Paper style={style} zDepth={1} >
	<Avatar src="https://pbs.twimg.com/profile_images/891963500112871424/XZ0or9wU_400x400.jpg" size="40px" style={{marginTop:10,marginLeft:5}}/>
	<span style={{marginLeft:10}}><b>Murari Tiwari</b> </span>  <span style={{marginLeft:10}}>tiwarithetiger11@gmail.com</span>
	<br/><span style={{marginLeft:50,marginBottom:5}}>Android</span>
	<br/>
	<Divider style={{marginLeft:50}}/>
	
	<p style={{marginLeft:50,marginTop:5}}>
	What are headers in c ?
	<img src="https://pbs.twimg.com/profile_images/891963500112871424/XZ0or9wU_400x400.jpg" width="90%" height="350px"/>
	<span style={{marginTop:5}}><a href="https://github.com/MurariTiwari/hpdf-groupTask">https://github.com/MurariTiwari/hpdf-groupTask</a></span>
	<br/>
	<span style={{marginTop:5}}> <a href="https://www.youtube.com/watch?v=s4_8ZtwvNY4">https://www.youtube.com/watch?v=s4_8ZtwvNY4</a></span></p>
	<Divider/>
	<div style={{textAlign:'center'}}>
	<FlatButton label="Answer" style={{borderRightWidth:2,borderRightColor:'#ddd',borderRightStyle:'solid'}} hoverColor='#fff'/><FlatButton label="View Answer" hoverColor='#fff'/>
    </div><Divider/>
	</Paper>
	</MuiThemeProvider>

  </div>
);
}}
export default Main;