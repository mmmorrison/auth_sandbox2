
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('employees').del(),

    // Inserts seed entries
    knex('employees').insert({ name: 'Fred'}),
    knex('employees').insert({name: 'Susan'}),
    knex('employees').insert({name: 'Ade'}),
    knex('employees').insert({name: 'Jacob'}),
    knex('employees').insert({name: 'Olu'}),
    knex('employees').insert({name: 'Samuel'})
  );
};
