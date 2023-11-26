Node js can be create server and perform all the relevent task without express js with the help of Http mudule .
But Express js can not  be performed the same task without nodejs.

thats is the basic Diffrence.

but we are using the express js mostly  to create the server due its readiablity and easyness of making codes.

yeah we can also perform the same task with help of HTTPS module but its some times difficult to write the everythink with http.


so we can conclude Express js is package to create the server behind the seen its also use http logic internaly. and we are able to use functionality of server.

<<<<<<<<ROUTING>>>>>>>>
use to create new req to the browser.

<<<<<<middleware>>>>>>
middleware aisa funciton hota h jo her route se phle chalta hai, iska matlab sare routes me se koi bhi chale usse phle middleware chalta h aur usme likha code execute hota h.

app.use(function(req,res,next){   })

req means user related data.
res means server related data.
next means to move request to another.

node ke sath ek problem hai ki agar ek bar control kisi middleware par gya to control khud se agle route/middleware par nhi jayega, use agle par le jane ke liy apko push krna pdega aur ye ham next() ki help se kr pate hai.

<<<<<Route Prameter>>>>
Dynamic routes
   /profile/:username

to make any routes dynamic you can use colon : at the place where you want to make it dyanmic. and access the value use req.params.varibename


<<<<<<<<template engine>>>>>>>>

we are useing ejs
ejs  setup krna ke liy
1-   ejs install
    npm i ejs


2-   configure ejs  
 app.set("view engine","ejs");

3- ek views folder banao.

4-  usmain ejs files banao .

5- send ki jagan render use kro >> render krte time make sure app views folder wali hi koi file kaa name likhana hai, aur render function me .ejs mention na kre.

template engine ek marku style hai jo ki bad me html md hi convert hojegi.

<<<<<<<Static files>>>>>>>
funciton =>  images stylesheet and frontend js setup krna.
 static file setup krne ke liy 
 1-  create a folder called public.

 2- create three folders inside it Images, Stylesheets, javascripts

 3- configure the express static

 4- understands the path

<<<<<<<HTTP methods GET POST>>>>>>>


GET method are used to send data without taking care of hide effect we can see in url link.
Post method send the data secretly without viewing in url.


<<<<<<ERROR HANDLING>>>>>>

