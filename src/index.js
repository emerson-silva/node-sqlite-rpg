// importing the dependencies
const express = require('express');
const cors = require('cors');

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const characters =
[
  {
      name: "Enlodrel",
      sex: "Male",
      race: "Elf",
      class: "Paladin",
      aling: "G",
      attributes:
      {
          Str: 11,
          Dex: 11,
          Con: 9,
          Int: 7,
          Wis: 14,
          Cha: 13
      },
      desc: "Enlodrel wears scale mail and wields a longsword."
  },
  {
      name: "Angel",
      sex: "Female",
      race: "Halfling",
      class: "Monk",
      aling: "N",
      attributes:
      {
          Str: 9,
          Dex: 12,
          Con: 15,
          Int: 8,
          Wis: 12,
          Cha: 9
      },
      desc: "Angel wears simple clothing and wields a quarterstaff."
  },
  {
      name: "Eahtakir",
      sex: "Male",
      race: "Half elf",
      class: "Priest",
      aling: "N",
      attributes:
      {
          Str: 13,
          Dex: 9,
          Con: 10,
          Int: 9,
          Wis: 9,
          Cha: 11
      },
      desc: "Eahtakir wears modest garments and a dragonscale cloak. Eahtakir has an animal companion, a green firedrake named Chenry."
  },
  {
      name: "Gytha",
      sex: "Female",
      race: "Human",
      class: "Peasant",
      aling: "LG",
      attributes:
      {
          Str: 11,
          Dex: 12,
          Con: 15,
          Int: 6,
          Wis: 14,
          Cha: 14
      },
      desc: "Gytha wears well-made clothing and a black cloak. Gytha has raven named Hilda."
  },
  {
      name: "Wisym",
      sex: "Male",
      race: "Halfling",
      class: "Soldier",
      aling: "LE",
      attributes:
      {
          Str: 9,
          Dex: 7,
          Con: 11,
          Int: 14,
          Wis: 12,
          Cha: 7
      },
      desc: "Wisym wears leather armor and wields a battleaxe. Wisym is searching for his missing daughter."
  },
  {
      name: "Alyn",
      sex: "Female",
      race: "Halfling",
      class: "Rogue",
      aling: "NG",
      attributes:
      {
          Str: 8,
          Dex: 15,
          Con: 9,
          Int: 11,
          Wis: 11,
          Cha: 10
      },
      desc: "Alyn wears studded leather and wields a longsword. Alyn speaks with a soft voice."
  },
  {
      name: "Minarv",
      sex: "Female",
      race: "Gnome",
      class: "Artist",
      aling: "LN",
      attributes: {
          Str: 9,
          Dex: 9,
          Con: 7,
          Int: 10,
          Wis: 11,
          Cha: 10
      },
      desc: "Minarv wears modest garments and a fox fur cape. Minarv is jealous and fanatical."
  },
  {
      name: "Raha",
      sex: "Female",
      race: "Half orc",
      class: "Professional",
      aling: "N",
      attributes: {
          Str: 9,
          Dex: 8,
          Con: 11,
          Int: 14,
          Wis: 7,
          Cha: 11
      },
      desc: "Raha wears well-made clothing and a sling of vials and potions. Raha is searching for her lost sister."
  },
  {
      name: "Serime",
      sex: "Female",
      race: "Elf",
      class: "Alchemist",
      aling: "LG",
      attributes: {
          Str: 7,
          Dex: 10,
          Con: 11,
          Int: 13,
          Wis: 14,
          Cha: 10
      },
      desc: "Serime wears tailored clothing and an amulet of luminous crystal. Serime compulsively plays with a brass ring."
  },
  {
      name: "Annar orwardson",
      sex: "Male",
      race: "Dwarf",
      class: "Fighter",
      aling: "LG",
      attributes: {
          Str: 15,
          Dex: 8,
          Con: 11,
          Int: 8,
          Wis: 9,
          Cha: 9
      },
      desc: "Annar wears a chain shirt and wields a war pick and net. Annar is hunting the demon who slew his mentor."
  },
  {
      name: "Ciabha",
      sex: "Male",
      race: "Elf",
      class: "Peasant",
      aling: "NG",
      attributes: {
          Str: 10,
          Dex: 9,
          Con: 8,
          Int: 10,
          Wis: 11,
          Cha: 10
      },
      desc: "Ciabha wears plain clothing and several pouches hang from his belt. Ciabha seeks to help the poor and unfortunate."
  },
  {
      name: "Gamin",
      sex: "Female",
      race: "Dwarf",
      class: "Mercenary",
      aling: "CN",
      attributes: {
          Str: 9,
          Dex: 9,
          Con: 10,
          Int: 14,
          Wis: 7,
          Cha: 10
      },
      desc: "Gamin wears studded leather and wields a greataxe."
  },
  {
      name: "Catai",
      sex: "Male",
      race: "Elf",
      class: "Rogue",
      aling: "NG",
      attributes: {
          Str: 11,
          Dex: 12,
          Con: 12,
          Int: 13,
          Wis: 13,
          Cha: 14
      },
      desc: "Catai wears leather armor and wields a light hammer. Catai is virtuous and extravagant."
  },
  {
      name: "Cora",
      sex: "Female",
      race: "Elf",
      class: "Mercenary",
      aling: "CN",
      attributes: {
          Str: 10,
          Dex: 10,
          Con: 12,
          Int: 7,
          Wis: 9,
          Cha: 10
      },
      desc: "Cora wears studded leather and wields a longsword. Cora seeks revenge against the sister who betrayed her."
  },
  {
      name: "Merca",
      sex: "Female",
      race: "Tiefling",
      class: "Professional",
      aling: "LN",
      attributes: {
          Str: 13,
          Dex: 9,
          Con: 10,
          Int: 14,
          Wis: 9,
          Cha: 11
      },
      desc: "Merca wears fine clothing and numerous rings. Merca suffers a deadly allergy to moulds."
  },
  {
      name: "Elilda",
      sex: "Female",
      race: "Halfling",
      class: "Scholar",
      aling: "N",
      attributes: {
          Str: 8,
          Dex: 12,
          Con: 6,
          Int: 12,
          Wis: 9,
          Cha: 11
      },
      desc: "Elilda wears expensive clothing and a dragonscale cloak."
  },
  {
      name: "Here",
      sex: "Male",
      race: "Human",
      class: "Fighter",
      aling: "CN",
      attributes: {
          Str: 16,
          Dex: 14,
          Con: 13,
          Int: 5,
          Wis: 12,
          Cha: 6
      },
      desc: "Here wears a chain shirt and wields a maul. Here suffers a traumatic fear of darkness."
  },
  {
      name: "Anel",
      sex: "Female",
      race: "Elf",
      class: "Craftsman",
      aling: "LN",
      attributes: {
          Str: 14,
          Dex: 9,
          Con: 13,
          Int: 14,
          Wis: 11,
          Cha: 13
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

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});