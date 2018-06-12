import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Drop from './drop.svg'
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Like from './like.svg'
import Dislike from './dislike.svg'
import Report from './report.svg'
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
	
	<br/>
	<Divider style={{marginLeft:50}}/>
	
	<p style={{marginLeft:50,marginTop:5}}>
	<iframe width="90%" height="315" src="https://www.youtube.com/embed/obKkpPFnauc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
		</p><Divider/>
	<div style={{textAlign:'center'}}>
	<IconButton style={{marginLeft:15,marginRight:15}} ><img src={Like} height="25"/></IconButton>10
	<IconButton style={{marginLeft:15,marginRight:15}}><img src={Dislike} height="25"/></IconButton>5
	<IconButton style={{marginLeft:15,marginRight:15}}><img src={Report} height="25"/></IconButton>
	
	 </div><Divider/>
	</Paper>
	</MuiThemeProvider>

  </div>
);
}}
export default Main;























