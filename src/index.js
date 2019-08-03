// importing the dependencies
const express = require('express');
const cors = require('cors');

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const characters = [
  {
    playerName: "Emerson Silva",
    nickname: "Erdan",
    age: 29,
    sex: 'm',
    race: "elf",
    class: "ranger",
    atributes: {
      con: 8,
      for: 11,
      des: 17,
      int: 13,
      sab: 16,
      cha: 8
    }
  }
];

// enabling CORS for all requests
app.use(cors());

app.get('/', (req, res) => {
  res.send("Servidor em execução.");
});

app.get('/character/all', (req, res) => {
  res.send(characters);
});

app.get('/character/:char_id', (req, res) => {
  let char_id = req.params.char_id;
  if (char_id>=0 && char_id<characters.length) {
    res.send(characters[char_id]);
  } else {
    res.send({
      errorCode: 404,
      message: ("Can't find character with id " + char_id)
    });
  }
});

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});