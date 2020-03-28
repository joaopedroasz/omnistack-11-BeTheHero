// Definindo tabelas com migraions:
exports.up = function(knex) {
  return knex.schema.createTable('incidents', table => {
    table.increments(); // ID que será gerado automaticamente.

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ong_id').notNullable(); // Criando campo que será a chave extrangeira para referenciar a tabela de ONG's.

    table.foreign('ong_id').references('id').inTable('ongs'); // Criando chave estrangeira.
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
