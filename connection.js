const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "postgres",
    database: "postgres"
})
const getUserById = (req, res) => {
    client.query('SELECT * FROM loan_predict WHERE id = ?', [req.params.Loan_ID], (err, rows, fields) => {
      if (err) {
        throw error
      }
      res.status(200).json(rows)
    })
  }
// const getUsers = (request, response) => {
//     client.query('SELECT * FROM loan_prediction ORDER BY Loan_ID ASC', (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
//   }

module.exports = client
// module.exports = getUsers

