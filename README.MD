// What we have to do for start the NODE JS Project .

Install node js 
Create file Directory

express js install
Express js boilerplate js
Express Js ejs Setup
   
   Install ejs
   create views folder
   create ejs file
   render ejs files inside route

Express static files setup
Architecture of public folder

open Terminal CRTL+Baktics



'''Express Generator''' 
we do not need to create any folder/App structure we can auto gebnerate it with the help of Express Generator package.

Steps to use Express GENERATOR

npm i express-generator -g 

open CMD and navigate your directory

to create new APP type commond 
express appname --view=ejs

cd appName
npm i 

you can directly go from CMD to VS code with same directory.
code . 


Relational >>>>> DataBase mySQL
non RElation>>>>> MOngoDB


CODE SIDE    ------     MONGODB Side
DB setup     =>>>>       DB farmation
MODEL       =>>>>      Collection
Schema    =>>>>      Documents 


database of everyapp will be store in DATABASE . We will make different 2 container inside it to collect data. 

This cantainer are made by Models.
for refrence...
     MODEL       =>>>>      Collection

and Every Collection are are the collection of all same time of Documents.
that are termed as Schema in it.
Schema    =>>>>      Documents 


  =>>>> install mongoDB 
  =>>>> install mongoosejs
  =>>>> require and setup Collection
  =>>>> make Schema 
  =>>>> create model and export

  first link >>> product >>> Cummunity Edition >> community server download


  npm i mongooses


  _________Client_________SERVER_________
 _________cookies_________session________
    

Understanding sessions,
    creating sessions,
        req.session.SessionName = SessionVlaue
    
    read
        req.session.SessionName
   
    destroy
       res.session.destroy


using sessions accross routes and destroying session

   <<<<<<<<<<<<Cookie>>>>>>>>>>>>

Understanding cookies
    creating cookies, using cookies across routes and destroying cookies

//cookie setup
    res.cookie("name","value")

//cookie Reading 
   req.cookie.name

//cookie delete
    req.clearCookie("name")