const crypo = require('crypto');

const DBConnection = require('../database/connection');

module.exports = {
  async index(req, res) {
    // Buscando todas as ONG's do banco de dados:
    const ongs = await DBConnection('ongs').select('*');

    return res.json(ongs);
  },

  async store(req, res) {
    const {
      name,
      email,
      whatsapp,
      city,
      uf
    } = req.body;

    const id = crypo.randomBytes(4).toString('HEX'); // Criando um ID aleatório de tamanho 4 no formato hexadecimal.

    // Criando dado no DB.
    await DBConnection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return res.json({ id });
  },
};