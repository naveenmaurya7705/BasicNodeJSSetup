const express = require('express');
const app = express();
const port = 3000;


app.use(function(req,res,next){
next();
});

app.set("view engine","ejs");
app.use(express.static('./public'))







// app.get('/:username',(req,res)=>{
//   res.send(`helo ${req.params.username} welcome to our webpage.`)}
// );

app.get('/',(req,res)=>{
    res.render(`jhome`)
});

app.get('/contact',(req,res)=>{
  res.render('contact',{name: 'Naveen'})
})

app.get('/error', function(req,res, next){
  throw Error("something went wrong")
})
//error handling

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})


app.listen(port, (err)=>{
    console.log(`server is runnig at port no : ${port}`);
})