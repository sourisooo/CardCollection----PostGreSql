const dataMapper = require("../dataMapper");
let cards = [];
let favs = [];


const deckController = {

    async mainPage (req,res){

  
        res.render("cardList", {cards, title:"My deck"})




    },

    async addfav (req,res){

        const {id} = req.params;

        // console.log(id, typeof id)

        const card = await dataMapper.getCard(id);


        if((cards.length<5)&&(!cards.includes(e => e.id !== parseInt(id)))) {

        favs.push(card);

        req.session.bookmarks = favs;

        cards = req.session.bookmarks;

    }
    
        res.redirect("/deck")




    },


    async removefav (req,res){

        const {id} = req.params;

        // console.log(id, typeof id)

        // const card = await dataMapper.getCard(id);

        const favsfilter = favs.filter(e => e.id !== parseInt(id))

        favs = favsfilter;

        req.session.bookmarks = favs;

        cards = req.session.bookmarks;

    
        res.redirect("/deck")




    }



}

module.exports = deckController;
