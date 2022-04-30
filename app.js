const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})

client.connect();

app.get('/loan_predict', (req, res)=>{
    client.query(`Select * from loan_predict`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

// app.get('/loan_prediction/Loan_ID', (req, res)=>{
//     client.query(`Select * from loan_prediction ORDER BY Loan_ID DESC`, (err, result)=>{
//         if(!err){
//             res.send(result.rows);
//         }
//     });
//     client.end;
// })

app.get('/loan_predict/:id', (req, res)=>{
    client.query('Select * from loan_predict where id= ?',[req.params.id], (err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }

    });
    client.end;

app.post('/loan_predict', client.createUser)


    // app.put('/users/:id', db.updateUser)
    // app.delete('/users/:id', db.deleteUser)
})