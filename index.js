const express = require('express');

const indexRouter = require('./routes');
const apiRouter = require('./modules/api');
const exp = require('constants');
const app = express();

//setting up ejs
app.set('view engine','ejs');
app.set('views','./views');

//setting up static file 
app.use(express.static('public'));

//making ready for json
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//setting up the router
app.use('/',indexRouter);
//app.use('/api/v1', apiRouter);



//listen to port 3333
app.listen(3333,(err)=>{
    err? console.log(err): console.log("[+] Listening to port 3333");
})

