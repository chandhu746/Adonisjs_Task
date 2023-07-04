

import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'
import StudentsController from 'App/Controllers/Http/StudentsController'
import {schema } from '@ioc:Adonis/Core/Validator'
Route.get('chandhu', async () => {
  const users = await Database
.from('student')
.select('*')
 return Database.from('student').select('*')
})

//select query
Route.get('/A', async () => {
  return Database.from('manage').select('*')
})

// insert query
Route.get('M',async() =>{
  await Database      
  .insertQuery()
  .table('student')
  .insert({name: 'Thanush',student_id:'43',class:'8'})

  return Database.from('student').select('*')
})

//multi insert #success
Route.get('N',async() =>{
  // await Database.table('student').multiInsert([
  //   {name:"Thulasi Vasan",student_id:"15",class:"8"},
  //   {name:"Purush",student_id:"17",class:"7"}

    return Database.from('student').select('*')
  // ])
})

//Test run for Getcount method
// Route.get("Test",async() =>{
//   await Database.query().from('student').getCount()
// })

//RawQuery

// Route.get('N',async() =>{
//   const user = await Database
//   .rawQuery('select * from student where student_id=14')
// })


//  Route.get('/C','UsersController.index')

 
//  Route.put('C/:id','UsersController.update')

//  Route.delete('/C','UsersController.destroy')

// Route.get('D','UsersController.update')

// Route.get('/CS','UsersController.show')

Route.get('/infoStu','StudentsController.index')

Route.post('/writeData','StudentsController.store')

Route.patch('/up/:roll_no','StudentsController.update')

Route.delete('/delete/:roll_no', 'StudentsController.delete');

//for Dept table

Route.get('/infoDept','DeptsController.index')

Route.post('/writeD','DeptsController.store')

Route.patch('/upd/:stu_no','DeptsController.update')

Route.delete('/del/:stu_no','DeptsController.delete')



// Route.resource('/db','StudentsController')

Route.get('/join', 'StudentsController.joinTables');

// Route.post('st','StudentsController.store')
  
  