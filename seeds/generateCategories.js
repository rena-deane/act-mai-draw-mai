
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('categories').insert({id: 1, name: 'He Tipua! He Taniwha! He Atua!', act: true, draw: true}),
        knex('categories').insert({id: 2, name: 'Purakau', act: true, draw: true}),
        knex('categories').insert({id: 3, name: 'Whakaata', act: true, draw: true}),
        knex('categories').insert({id: 4, name: 'Waiata', act: true, draw: false}),
        knex('categories').insert({id: 5, name: 'Whakaari', act: true, draw: false}),
      ]);
    });
};
