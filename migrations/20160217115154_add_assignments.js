
exports.up = function(knex, Promise) {
  return knex.schema.createTable('assignments', function (t) {
    t.integer('team_id');
    t.integer('employee_id');
    t.timestamps();
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('assignments');
};
