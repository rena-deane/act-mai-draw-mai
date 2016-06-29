
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('categories').insert({id: 1, entry: 'Papatuanuku', category: 'He Atua! He Tipua!', description: 'The land, Earth Mother'}),
        knex('categories').insert({id: 2, entry: 'Tawhirimatea', category: 'He Atua! He Tipua!', description: 'God of the weather'}),
        knex('categories').insert({id: 3, entry: 'Patupaiarehe', category: 'Purakau', description: 'Fairy-like beings who were seldom seen'})
      ]);
    });
};
