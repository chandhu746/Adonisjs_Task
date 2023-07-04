import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Dept extends BaseModel {
  @column({ isPrimary: true })
  public deptNo: number

  @column()
  public stuNo: number

  @column()
  public deptName: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
