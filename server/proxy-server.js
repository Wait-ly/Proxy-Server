require('newrelic');
const express = require('express');
const axios = require('axios');

const app = express();
const bodyParser = require('body-parser');

const port = 3000;


// app.use('/:id/', express.static('public'));

app.get('/index_bundle.js', (req, res) => {
  console.log('received request for bundle');
  axios.get('http://localhost:3004/index_bundle.js')
    .then((response) => {
      // response = JSON.parse(response);
      console.log(Object.keys(response));
      // console.log(response.data)
      res.send(response.data);
    })
    .catch((err) => {
      console.log(`<><><><><><><><><>AHHHHHHH GET OUT THERE'S AN ERROR WE ALL GONNA DIEEEEEEEE<><><><><><><><><><>`)
      console.log(err);
      res.send();
    })
});

app.get('/api/menu/:id', (req, res) => {
  // console.log('received request for menu');
  let id = req.params.id;
  axios.get(`http://localhost:3004/api/menu/${id}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(`XxXxXxXxXxXxXxXxXxX  AHHHHHHH RUN AWAY, RUN AWAY, THERE'S AN Ȅ͖̰̱̠̞̩̬̱̔̆̈́ͩR̳̥̈́̆͆̃̂̊R͚̰̈́́O̱̫͇̦̙͋̉͛ͣͥ̆̚R̟̠̹ͬ͊̈ͬ̑̃ WE ALL GONNA DIEEEEEEEE  XxXxXxXxXxXxXxXxXxX`);
      console.log(err);
      res.send();
    })
});



app.listen(port, () => { console.log(`Proxy server listening on port ${port}`); });
