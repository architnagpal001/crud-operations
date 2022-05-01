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

// app.get('/loan_predict/:id', (req, res)=>{
//     client.query('Select * from loan_predict where id= ?',[req.params.id], (err, rows, fields)=>{
//         if(!err){
//             res.send(rows);
//         }

//     });
//     client.end;
//   });
app.get('/loan_predict/:id', (req, res)=>{
    const id = req.params.id;
    client.query(`Select * from loan_predict WHERE id = ${id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }

    });
    client.end;
});
// app.put('/loan_predict/:id', (req, res)=>{
//     const id = req.params.id;
//     const data = req.body;
//     client.query(`UPDATE loan_predict SET ? WHERE id = ${id}`, data = data.json, (err, result)=>{
//         if(!err){
//             res.send(result.rows);
//         }
//     });
//     client.end;
// });
app.delete('/loan_predict/:id', (req, res)=>{
    const id = req.params.id;
    const data = req.body;
    client.query(`DROP loan_predict SET ? WHERE id = ${id}`, data , (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
});