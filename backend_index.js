const express = require('express');
const path = require('path');
const myPostGreSQL = require('./SQLdatabase/postGreSQL.js');

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname,'client/dist/')));

app.get('/', function (req, res) {
  res.send('DnD: Combat Assistant')
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});


//function ideas.
// check party
// move!!! 

// board and grid position checks.


// 1. determine initiative.
// 2. enforce order of attack.

// user turn engage!!!!


// 2. attack.  perform attack based on level and stats.
// 3.  user choices for attack


// 3.  get enemy stats!


// 3.  engage with merchant
// 4.  get inventory.
// HP slots
// rested state


