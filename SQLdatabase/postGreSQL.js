
const { Pool } = require('pg');
const pool = new Pool({
  user: 'Tom1',

  host: 'localhost',  
  database: 'questionandanswer',
  password: 'password',
  port: 5432,
});

// const {Client } = require('pg');

// const client = new Client({
//   user: 'Tom1',
//   host: 'localhost',  
//   database: 'questionandanswer',
//   password: 'password',
//   port: 5432,
// })

pool.connect();

const getProfile = function(obj_param, callback) {

  var queryStr = `SELECT * from "Questions"`;

    pool.query(queryStr, (err, res) => {
      if (err) {
        callback(err, null);
      }
   
      if (!res.rows[0]) {
        callback(null, {
          product_id: product_id,
          firstresults: res.rows,
          results: [],
        });
      }
      else {
        callback(null, {
          product_id: product_id,
          results: parseQuery.parseGetQuestions(res.rows, lowerbound, upperbound),
        });
      }
    });
};

module.exports = {
  getProfile
};
