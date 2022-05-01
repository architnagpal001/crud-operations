const db = require('./connection.js')
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (req, res) => {
  res.send('Hello World')
}) 
//get all elements
app.get('/loan_predict', db.getAllUsers);
//getelement by id
app.get('/loan_predict/:id', db.getUserById);
//delete
app.delete('/loan_predict/:id', db.deleteUser);
app.post('/loan_predict', db.insertUser);

app.put('/loan_predict/:id', db.updateUser);

app.listen(3300, ()=>{
    console.log("Server is now listening at port 3300");
})