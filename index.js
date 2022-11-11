const express = require('express');
const app = express();
const port = 8000;

//use express router
//all the paths that starts with home part or / basically all the url
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error: ${err}`);
        return;
    }
    console.log("Server is up and runnig on port: ",port);
})