

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('teams').del(),

    // Inserts seed entries
    knex('teams').insert({ team_name: 'Red'}),
    knex('teams').insert({team_name: 'Blue'}),
    knex('teams').insert({team_name: 'Orange'}),
    knex('teams').insert({team_name: 'Purple'}),
    knex('teams').insert({team_name: 'Clear'})
  );
};
