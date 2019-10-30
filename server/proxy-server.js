require('newrelic');
const express = require('express');
const axios = require('axios');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
const serviceIP = '172.31.8.16';

app.use(express.static('public'));

app.get('/index_bundle.js', (req, res) => {
  console.log('received request for bundle');
  axios.get('http://172.31.8.16:3004/index_bundle.js')
    .then((response) => {
      // response = JSON.parse(response);
      // console.log(Object.keys(response));
      // console.log(response.data)
      res.send(response.data);
    })
    .catch((err) => {
      console.log(`ERROR`)
      console.log(err);
      res.send();
    })
});

app.get('/api/menu/:id', (req, res) => {
  // console.log('received request for menu');
  let id = req.params.id;
  axios.get(`http://172.31.8.16:3004/api/menu/${id}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(`ERROR`);
      console.log(err);
      res.send();
    })
});



app.listen(port, () => { console.log(`Proxy server listening on port ${port}`); });
