'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.charset('utf8')
      table.increments()
      table.string('employee_id').unique().notNullable()
      table.string('first_name')
      table.string('last_name')
      table.string('position_title')
      table.integer('department_id').unsigned()
      .references('id').inTable('departments')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
