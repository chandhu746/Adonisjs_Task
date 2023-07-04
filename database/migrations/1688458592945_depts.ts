import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'depts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('dept_no').notNullable()
      table.integer('stu_no')
          .references('roll_no')
          .inTable("students")
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table.string('dept_name').notNullable()

      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
