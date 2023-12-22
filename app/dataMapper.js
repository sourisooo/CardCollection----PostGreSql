const database = require('./database');

const dataMapper = {
  async getAllCards() {
    const query = "SELECT * FROM card";
    const result = await database.query(query);
    return result.rows;
  },

  async getCard(card) {
    const query = `SELECT * FROM card WHERE id = ${card}`;
    const result = await database.query(query);
    return result.rows[0];
  },

  async searchElement(data) {
    const query = `SELECT * FROM card WHERE element = '${data}'`;
    const result = await database.query(query);
    return result.rows;
  },

  async searchNiveau(data) {
    const query = `SELECT * FROM card WHERE level = '${data}'`;
    const result = await database.query(query);
    return result.rows;
  },

  async searchNom(data) {
    const query = `SELECT * FROM card WHERE name = '${data}'`;
    const result = await database.query(query);
    return result.rows;
  },

  async searchValeur(data,type){

    const query = `SELECT * FROM card WHERE ${type} = '${data}'`;
    const result = await database.query(query);
    // console.log(result.rows);
    return result.rows;

  },




};


module.exports = dataMapper;
