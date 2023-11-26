// Using Node.js `require()`

const mongoose = require('mongoose');

//setup and connection
mongoose.connect('mongodb://127.0.0.1:27017/testDataBase')
  .then(() => console.log('mongodb database successfully Connected!'));

//Making Schema 
const User = mongoose.Schema(
    {
        Username:String,
        Password:String
    }
)

//Creating Model

const DB = mongoose.model('UserData',User)


