const DBConnection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query; // Definindo um valor padrão para 'page'.

    const [count] = await DBConnection("incidents").count();

    const incidents = await DBConnection("incidents")
      // Juntando informaçoẽs de duas tabelas:
      .join("ongs", "ongs.id", "=", "incidents.ong_id") // Pegando informações da ONG, na qual o ID seja igual ao ID do 'incident' listado.
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ]);

    res.header("X-Total-Count", count["count(*)"]); // Enviando uma informação através do 'header' a resposta.

    return res.json(incidents);
  },

  async store(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    // Essa inserção retorna um array de uma posição, que será armazenada na variável 'id', dessestruturação.
    const [id] = await DBConnection("incidents").insert({
      title,
      description,
      value,
      ong_id
    });

    return res.json({
      id
    });
  },

  async destroy(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await DBConnection("incidents")
      .where("id", id) // Buscando o incident pelo ID que é passado.
      .select("ong_id") // Pegando apenas o campo 'ong_id'.
      .first();

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({
        error: "Operation nor permitted"
      });
    }

    await DBConnection("incidents")
      .where("id", id)
      .delete();

    return res.status(204).send();
  }
};
