const express = require('express')
const app = express()
const port = 3000;

const DB = require('./mongoose')


//its Called middleware
app.use((req,res,next)=>{
    console.log("we successfully executed our main file");
    next();
})




//view engine setup

app.set("view engine","ejs");

//Static file setup
app.use(express.static('./public'));


app.get('/', function (req, res) {
//   res.send('Hello World')
      res.render('form');
})

app.listen(port,(err)=>{
    if(err){
        console.log("Error in running server",err);
    }
    console.log(`server is running at port No. : ${port}`)
})