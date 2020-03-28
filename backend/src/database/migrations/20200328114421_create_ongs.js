// Definindo tabelas com migraions:
exports.up = function(knex) {
  return knex.schema.createTable('ongs', table => {
    table.string('id').primary(); // Chave primária
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable(); // UF vai ter apenas 2 de tamanho.
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
