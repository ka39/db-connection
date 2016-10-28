//web app connection to database using express
var express = require('express");  //include express module
var app = express();  //create application object
//create connection to database
app.get('/', function(request, response){
    var pg = require('pg');  //include PostgreSQL database module
    //configuration for database
    var config = {
                  user = 'ka39',
                  password = 'db-ka39-42385',
                  server = '  ',
                  database = '  '
    };
    //connect to database
    pg.connect(config, function(err){
        if(err) console.log(err);  //report error if any
        //create request object
        var request = new pg.Request();
        //query database and get result
        request.query('SELECT * FROM game WHERE sid = 1', function(err, result){
            if(err) console.log(err);
            //send result as response
            response.send(result);
        });
    });
});
//create server to listen at port 5000
var server = app.listen(5000, function(){
   console.log('server iistening at 5000...');
});
