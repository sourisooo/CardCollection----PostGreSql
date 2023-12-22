const dataMapper = require("../dataMapper");

const searchController = {
  searchPage: (req, res) => {

    res.render('search');
  },

  searchElement: async (req, res) => {
    const data = req.body.element;

    console.log(req.body);

    try {

      const cards = await dataMapper.searchElement(data);

      res.render('cardList', {cards, title: 'Liste des cartes'});

      
    } catch (error) { console.log(error)
      
    }


  },

  searchNiveau: async (req, res) => {
    const data = req.body.level;

    console.log(req.body);

    try {

      const cards = await dataMapper.searchNiveau(data);

      res.render('cardList', {cards, title: 'Liste des cartes'});

      
    } catch (error) { console.log(error)
      
    }


  },

  
  searchNom: async (req, res) => {
    const data = req.body.name;

    console.log(req.body);

    try {

      const cards = await dataMapper.searchNom(data);

      res.render('cardList', {cards, title: 'Liste des cartes'});

      
    } catch (error) { console.log(error)
      
    }


  },

  searchValeur: async (req, res) => {
    const data = req.body.value;

    const type = "value_"+req.body.direction;

    // console.log(req.body);

    console.log(data,type);

    try {

      const cards = await dataMapper.searchValeur(data,type);

      res.render('cardList', {cards, title: 'Liste des cartes'});

      
    } catch (error) { console.log(error)
      
    }


  },


};

module.exports = searchController;
