exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTableIfNotExists('categories', function (table) {
          table.increments('id').primary()
          table.string('name')
          table.boolean('act')
          table.boolean('draw')
        })
    ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('categories')
  ])
}