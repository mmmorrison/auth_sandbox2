
exports.up = function(knex, Promise) {
  return knex.schema.createTable('teams', function (t) {
    t.increments();
    t.string('team_name');
    t.timestamps();
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teams');
};
