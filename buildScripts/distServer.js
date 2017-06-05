import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){
  res.json([
    {
      "id": 2875557,
      "firstName": "Katlyn",
      "lastName": "Hahn",
      "email": "Cathy_Baumbach20@gmail.com"
    },
    {
      "id": 78101590,
      "firstName": "Stefanie",
      "lastName": "Mann",
      "email": "Yoshiko36@yahoo.com"
    },
    {
      "id": 31105157,
      "firstName": "Alejandra",
      "lastName": "Mohr",
      "email": "Earlene57@gmail.com"
    }
  ]);
});

app.listen(port, function(err){
  if (err){
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
