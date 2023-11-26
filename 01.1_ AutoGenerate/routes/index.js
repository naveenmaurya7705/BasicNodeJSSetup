var express = require('express');
var router = express.Router();
const userModel = require('./users');
const localStrategy = require('passport-local');
const passport = require('passport')


passport.use(new localStrategy (userModel.authenticate()));

router.get("/",function(req,res){
  res.render("index")
})


//Creation of data

router.get('/create',async function(req,res){
   let userdata = await userModel.create({
    username:"sandya",
    nickname: "sandy",
    description:"I am a girl with under graduate.",
    categories:['B.ed.','BTC','BA'],
    

   });

   res.send(userdata)
});


 //REAd data from mongodb

router.get('/find',async function(req,res){
 let regex =  new RegExp("^DaLi$" ,'i')
   let user = await userModel.find({ username: regex})
  res.send(user)
})

//code for Registering User

router.post('/register',function(req,res){
  var userdata = new userModel({
    username : req.body.username,
    secret : req.body.secret
  });

  userModel.register(userdata,req.body.password)
  .then(function(registereduser){
    passport.authenticate('local')(req,res,function(){
      res.redirect('/profile')
    })
  })
});

//Profile page
router.get('/profile',isLoggedIn,function(req,res){
  res.send('Welcome to user profile page.')
  
})


// Code for Login routes
router.post('/login',passport.authenticate('local',{
  successRedirect: "/profile",
  failureRedirect: '/'
}),function(req,res){

})

// Code for LOGOUT
router.get('/logout',function(req,res,next){
  req.logout(function(err){
    if(err){
      return next(err);
      res.redirect('/');
    }
  });
});

//Code for isLoggedIn Middleware

function isLoggedIn(req ,res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/')
}

// router.get("/failed",function(req,res){
//   req.flash("MyName","Naveen Maurya")
//   req.flash("age",21)
//   res.send("ban gya.")
// })

// router.get("/check",function(req,res){
//   console.log(req.flash("MyName"), req.flash("age"));
//   res.send("go to terminal and see the data.")
// })


/* GET home page. */
router.get('/user', function(req, res, next) {
  res.render('user', { title: 'Express' });
});

module.exports = router;
