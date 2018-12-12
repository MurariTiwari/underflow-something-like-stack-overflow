var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Pool=require('pg').Pool;



var app = express();

/*Configuration object for connecting to  database */

var config={
	user:'murari',
	database:'free4error',
	port:'5432',
	password:''
}

//creating pool object
var pool=new Pool(config);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



    app.get('/',(req,res)=>{res.send('All Fine')});
  
  /* To subscribe a new language*/
    app.post('/subscribe',(req,res)=>{
	pool.query('update users set subscription=array_append(subscription,$1) where email=$2',[req.body.lname,req.body.email],(err,result)=>{
	if(err)
	{
	 console.log(err);	
	}else
    {
      slanguage(req.body.email,res);
	}		
	});
  });
   function slanguage(email,res)
	{
		pool.query('select * from language',(err,result)=>{
			if(err)
			{
			console.log(err);
			}
			else
			{
			 unsubscribed(email,res,result.rows);
			}})
	}
  
	function unsubscribed(email,res,ans)
	{    var unsub=[];var lname,pic,temp,k=0,count=0;
		pool.query('select subscription from users where email=$1',[email],(err,result)=>{
			if(err)
			{
				
			}
			else{
				for(i in ans)
				{
					for(j in result.rows[0].subscription)
					{
						if(ans[i].lname==result.rows[0].subscription[j])
						{
							count++;
						}
					}
					if(count==0)
					{
						lname=ans[i].lname;
						pic=ans[i].pic;
						temp={'lname':lname,'pic':pic};
						unsub[k]=temp;
						k++;
					}
					else
					{
						count=0;
					}
				}
				 res.setHeader('Content-Type','application/json');
			res.send(JSON.stringify(unsub));
				 }
		})
	}
	
	
/* To display lists of languages which are unsubscribed */	
	app.post('/lang',(req,res)=>{
		 slanguage(req.body.email,res);
		});


/* Put data to database and return the details to be rendered and also maintain session */
    app.post('/signup',(req,res)=>{
	pool.query('insert  into users (email,name,pic) values($1,$2,$3)',[req.body.email,req.body.name,req.body.pic],(err,result)=>{
		if(err)
		{
			res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ "msg" : "User Exist"}));
		}
		else
		{
	        res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ "msg" : "signedUp sucessfully" }));
		}});
     });
/*  */

/* Check whether the user exist if exist return loged in sucessfully and maintain the session and if user doesnot exist return  sign in please*/
    app.post('/signin',(req,res)=>{
	  pool.query('select  * from users where email=$1',[req.body.email],(err,result)=>{
		 if(err)
		{
			res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ "msg" : "Something went wrong"}));
		}
		else
		{
			if(result.rows[0])
			{
	        res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ "msg" : "signedIn sucessfully" }));
		    }
			else
			{
			 res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ "msg" : "sign Up First" }));	
			}
		}  
	  });
	});

/* */

/* Checks if the session has been maintained and returns the response */
    app.post('/login',(req,res)=>{
		if(req.body)
		{
			console.log(req.body.email);
			pool.query('select * from users where email=$1',[req.body.email],(err,result)=>{
				if(err)
				{
					
				}
				else{
					if(result.rows[0])
					{     console.log(result.rows[0]);
						 res.setHeader('Content-Type', 'application/json');
                         res.send(JSON.stringify(result.rows[0]));	
					}
				}
			});
		}
		else{
			console.log("no");
		}
	});
/* */


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
