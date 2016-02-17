
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('assignments').del(),

    // Inserts seed entries
    knex('assignments').insert({employee_id: 2, team_id: 3}),
    knex('assignments').insert({employee_id: 1, team_id: 3}),
    knex('assignments').insert({employee_id: 0, team_id: 3}),
    knex('assignments').insert({employee_id: 4, team_id: 2}),
    knex('assignments').insert({employee_id: 4, team_id: 1}),
    knex('assignments').insert({employee_id: 3, team_id: 0})
  );
};
