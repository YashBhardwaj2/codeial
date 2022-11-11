const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets'));
app.use(expressLayouts);
//use express router
//all the paths that starts with home part or / basically all the url
app.use('/',require('./routes'));

//set up view engine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){ 
        console.log(`Error: ${err}`);
        return;
    }
    console.log("Server is up and runnig on port: ",port);
})