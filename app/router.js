const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');
const deckController = require('./controllers/deckController');



router.get('/', mainController.homePage);

router.get('/search', searchController.searchPage);
router.post('/search/element', searchController.searchElement);
router.post('/search/level', searchController.searchNiveau);
router.post('/search/valeur', searchController.searchValeur);
router.post('/search/name', searchController.searchNom);

router.get('/card/:card', mainController.cardPage);

router.get('/deck', deckController.mainPage);
router.get('/deck/add/:id', deckController.addfav);
router.get('/deck/remove/:id', deckController.removefav);





module.exports = router;
