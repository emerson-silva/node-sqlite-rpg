// importing the dependencies
const express = require('express');
const cors = require('cors');

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const characters =
  [
    {
      name: "Sofia",
      sex: "Female",
      race: "Elf",
      class: "Paladin",
      lvl: 1,
      aling: "G",
      attributes:
      {
        str: 11,
        dex: 11,
        con: 9,
        int: 7,
        wis: 14,
        cha: 13
      },
      desc: "Sofia wears scale mail and wields a longsword."
    },
    {
      name: "Angel",
      sex: "Female",
      race: "Halfling",
      class: "Monk",
      lvl: 2,
      aling: "N",
      attributes:
      {
        str: 9,
        dex: 12,
        con: 15,
        int: 8,
        wis: 12,
        cha: 9
      },
      desc: "Angel wears simple clothing and wields a quarterstaff."
    },
    {
      name: "Eahtakir",
      sex: "Male",
      race: "Half elf",
      class: "Priest",
      lvl: 2,
      aling: "N",
      attributes:
      {
        str: 13,
        dex: 9,
        con: 10,
        int: 9,
        wis: 9,
        cha: 11
      },
      desc: "Eahtakir wears modest garments and a dragonscale cloak. Eahtakir has an animal companion, a green firedrake named Chenry."
    },
    {
      name: "Gytha",
      sex: "Female",
      race: "Human",
      class: "Peasant",
      lvl: 3,
      aling: "LG",
      attributes:
      {
        str: 11,
        dex: 12,
        con: 15,
        int: 6,
        wis: 14,
        cha: 14
      },
      desc: "Gytha wears well-made clothing and a black cloak. Gytha has raven named Hilda."
    },
    {
      name: "Wisym",
      sex: "Male",
      race: "Halfling",
      class: "Soldier",
      lvl: 6,
      aling: "LE",
      attributes:
      {
        str: 11,
        dex: 7,
        con: 15,
        int: 14,
        wis: 12,
        cha: 7
      },
      desc: "Wisym wears leather armor and wields a battleaxe. Wisym is searching for his missing daughter."
    },
    {
      name: "Alyn",
      sex: "Female",
      race: "Halfling",
      class: "Rogue",
      lvl: 8,
      aling: "NG",
      attributes:
      {
        str: 8,
        dex: 18,
        con: 9,
        int: 13,
        wis: 11,
        cha: 16
      },
      desc: "Alyn wears studded leather and wields a longsword. Alyn speaks with a soft voice."
    },
    {
      name: "Minarv",
      sex: "Female",
      race: "Gnome",
      class: "Artist",
      lvl: 5,
      aling: "LN",
      attributes: {
        str: 8,
        dex: 14,
        con: 6,
        int: 10,
        wis: 14,
        cha: 16
      },
      desc: "Minarv wears modest garments and a fox fur cape. Minarv is jealous and fanatical."
    },
    {
      name: "Raha",
      sex: "Female",
      race: "Half orc",
      class: "Professional",
      lvl: 9,
      aling: "N",
      attributes: {
        str: 14,
        dex: 14,
        con: 13,
        int: 14,
        wis: 7,
        cha: 13
      },
      desc: "Raha wears well-made clothing and a sling of vials and potions. Raha is searching for her lost sister."
    },
    {
      name: "Serime",
      sex: "Female",
      race: "Elf",
      class: "Alchemist",
      lvl: 8,
      aling: "LG",
      attributes: {
        str: 7,
        dex: 10,
        con: 13,
        int: 13,
        wis: 15,
        cha: 10
      },
      desc: "Serime wears tailored clothing and an amulet of luminous crystal. Serime compulsively plays with a brass ring."
    },
    {
      name: "Annar orwardson",
      sex: "Male",
      race: "Dwarf",
      class: "Fighter",
      lvl: 1,
      aling: "LG",
      attributes: {
        str: 15,
        dex: 8,
        con: 11,
        int: 8,
        wis: 9,
        cha: 9
      },
      desc: "Annar wears a chain shirt and wields a war pick and net. Annar is hunting the demon who slew his mentor."
    },
    {
      name: "Ciabha",
      sex: "Male",
      race: "Elf",
      class: "Peasant",
      lvl: 3,
      aling: "NG",
      attributes: {
        str: 10,
        dex: 9,
        con: 8,
        int: 11,
        wis: 12,
        cha: 12
      },
      desc: "Ciabha wears plain clothing and several pouches hang from his belt. Ciabha seeks to help the poor and unfortunate."
    },
    {
      name: "Gamin",
      sex: "Female",
      race: "Dwarf",
      class: "Mercenary",
      lvl: 4,
      aling: "CN",
      attributes: {
        str: 7,
        dex: 10,
        con: 8,
        int: 14,
        wis: 10,
        cha: 13
      },
      desc: "Gamin wears studded leather and wields a greataxe."
    },
    {
      name: "Catai",
      sex: "Male",
      race: "Elf",
      class: "Rogue",
      lvl: 12,
      aling: "NG",
      attributes: {
        str: 11,
        dex: 16,
        con: 12,
        int: 13,
        wis: 15,
        cha: 18
      },
      desc: "Catai wears leather armor and wields a light hammer. Catai is virtuous and extravagant."
    },
    {
      name: "Cora",
      sex: "Female",
      race: "Elf",
      class: "Mercenary",
      lvl: 1,
      aling: "CN",
      attributes: {
        str: 10,
        dex: 10,
        con: 12,
        int: 7,
        wis: 9,
        cha: 10
      },
      desc: "Cora wears studded leather and wields a longsword. Cora seeks revenge against the sister who betrayed her."
    },
    {
      name: "Merca",
      sex: "Female",
      race: "Tiefling",
      class: "Professional",
      lvl: 6,
      aling: "LN",
      attributes: {
        str: 10,
        dex: 16,
        con: 10,
        int: 14,
        wis: 9,
        cha: 13
      },
      desc: "Merca wears fine clothing and numerous rings. Merca suffers a deadly allergy to moulds."
    },
    {
      name: "Elilda",
      sex: "Female",
      race: "Halfling",
      class: "Scholar",
      lvl: 9,
      aling: "N",
      attributes: {
        str: 7,
        dex: 13,
        con: 6,
        int: 18,
        wis: 11,
        cha: 13
      },
      desc: "Elilda wears expensive clothing and a dragonscale cloak."
    },
    {
      name: "Here",
      sex: "Male",
      race: "Human",
      class: "Fighter",
      lvl: 5,
      aling: "CN",
      attributes: {
        str: 16,
        dex: 14,
        con: 13,
        int: 5,
        wis: 12,
        cha: 6
      },
      desc: "Here wears a chain shirt and wields a maul. Here suffers a traumatic fear of darkness."
    },
    {
      name: "Anel",
      sex: "Female",
      race: "Elf",
      class: "Craftsman",
      lvl: 2,
      aling: "LN",
      attributes: {
        str: 14,
        dex: 9,
        con: 13,
        int: 14,
        wis: 11,
        cha: 13
      },
      desc: "Anel wears well-made clothing and a blue cloak. Anel is lustful and cowardl."
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

app.get('/user/:user_id/character/all', (req, res) => {
  let user_id = req.params.char_id;
  if (user_id>=0 && user_id<n_users) {
    switch (user_id) {
      case 0:
        res.send(characters.splice(0,3));
        break;
      case 1:
        res.send(characters.splice(3,6));
        break;
      case 2:
        res.send(characters.splice(6,9));
        break;
      case 3:
        res.send(characters.splice(9,12));
        break;
      case 4:
        res.send(characters.splice(12,15));
        break;
      default:
        res.send({
          errorCode: 404,
          message: ("Can't find character with id " + char_id)
        });
    }
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
