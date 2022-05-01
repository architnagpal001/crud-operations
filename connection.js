const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "postgres",
    database: "postgres"
})

client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

//get all elements
const getAllUsers = (req, res)=>{
    client.query(`Select * from loan_predict`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
}

//getusers by id

const getUserById = (req, res) => {
    const id = req.params.id
    client.query(`SELECT * FROM loan_predict WHERE id = ${id}`, (err, rows) => {
      if (err) {
        throw error;
      }
      res.status(200).send(rows)
    })
  }


const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  client.query(`DELETE FROM loan_predict WHERE id = ${id}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}
const insertUser = (request, response) => {
  const { id , dependents } = request.body
  client.query('INSERT INTO loan_predict (id, dependents) VALUES ($1, $2)', [id , dependents], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${id}`)
    })
}
const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const {dependents, credit_history} = request.body

  client.query(
    'UPDATE loan_predict SET dependents = $1, credit_history = $2 WHERE id = $3',
    [dependents, credit_history, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}
module.exports = {
    getAllUsers,
    getUserById,
    deleteUser,
    insertUser,
    updateUser
}