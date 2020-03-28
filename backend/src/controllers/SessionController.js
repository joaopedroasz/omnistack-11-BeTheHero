const DBConnection = require('../database/connection');

module.exports = {
  async store(req, res) {
    const { id } = req.body; 

    const ong = await DBConnection('ongs')
    .where('id', id)
    .select('name')
    .first();

    if (!ong) {
      return res.status(400).json({ error: 'No ONG found' });
    }

    return res.json(ong);
  },
};