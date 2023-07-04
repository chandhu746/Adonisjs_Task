import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Dept from 'App/Models/Dept'

export default class DeptsController {

    public async index(ctx: HttpContextContract){
        return Dept.all(); //select * from users (table_name)
    }

    public async store({request, response}: HttpContextContract){
        
        const body = request.body();

        const depts = await Dept.create(body); //create instance and save in one go

            //    response.status(201);

                return depts;

    }
    public async show({params}: HttpContextContract){
        return Dept.findOrFail(params.id);

    }

    public async update({ params, request }: HttpContextContract) {
        const body = request.body();
      
        const dept = await Dept.query().where('stu_no', params.stu_no).firstOrFail();
      
        dept.deptName = body.name;
      
        await dept.save();
        
        return dept;
      }
      

      public async delete({ params }: HttpContextContract) {
        const dept = await Dept.query().where('stu_no', params.stu_no).firstOrFail();
        await dept.delete();
        return 'Record deleted successfully';
      }
      


}
