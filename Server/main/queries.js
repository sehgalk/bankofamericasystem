const Pool = require('pg').Pool
const pool = new Pool({
  user: 'kritisehgal',
  host: 'localhost',
  database: 'aitwithmrd',
  password: 'kritis',
  port: 5432,
})

pool.connect()
//GET all Applications request
const getApplications = (request, response) => {
    pool.query('SELECT AppID, AppFullName FROM aitwithmrd', (error, results) => {
        if (error){
            throw error
        }
        response.status(200).json(results.row)
    })
}

//GET a single application by AppID
// /applications/:AppID
const getApplicationByID = (request, response) => {
    const appID = parseInt(request.params.AppID)

    pool.query('SELECT * FROM aitwithmrd WHERE AppID = $1', [appID], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.row)
    })
}

module.exports = {
    getApplications,
    getApplicationByID,
}