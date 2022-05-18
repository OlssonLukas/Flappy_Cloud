/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.text('username').unique().notNullable().primary();
    tbl.integer('highscore');
    tbl.text('password').notNullable();
    tbl.text('role');
    console.log(tbl)

  }).createTable('metrics', tbl => {
    tbl.integer('id').unique().notNullable().primary();
    tbl.text('username').notNullable().references("username").inTable("users");
    tbl.integer('playtime');
    tbl.integer('score');
    tbl.integer('clicks');
    console.log(tbl)

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users').dropTableIfExists('metrics')
};
