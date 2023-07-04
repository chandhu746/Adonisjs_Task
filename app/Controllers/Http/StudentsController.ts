import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Student from 'App/Models/Student'
import Dept from 'App/Models/Dept';
import {schema,rules} from '@ioc:Adonis/Core/Validator';

export default class StudentsController {
    public async index(ctx: HttpContextContract){
        return Student.all(); 
    }

    public async store({request, response}: HttpContextContract){
        
        const body = request.body();

        const students = await Dept.create(body); //create instance and save in one go


                const newPostSchema = schema.create({
                    roll_no: schema.number(),
                    stu_name: schema.string(),
                    course_name: schema.string()
                  })
                
                  const payload = await request.validate({ schema: newPostSchema })

                  return students;

    }
      
        // const students = await Student.create(payload); //create instance and save in one go
        // return students;

    

    
    public async show({params}: HttpContextContract){
        return Student.findOrFail(params.id);

    }

    public async update({ params, request}: HttpContextContract){
        const body= request.body();

        const student = await Student.findByOrFail('roll_no', params.roll_no);

        student.stuName=body.stuName
        await student.save();
        return student;
    }

    public async delete({ params }: HttpContextContract) {
        const student = await Student.findByOrFail('roll_no', params.roll_no);
        await student.delete();
        return 'Student deleted successfully';
      }
//inner join 
    public async joinTables({ response }: HttpContextContract) {
          const result = await Database.query()
            .from('students')
            .join('depts', 'students.roll_no', 'depts.stu_no')
            .select('students.*', 'depts.dept_name')
            .exec();
      
          return response.ok(result);
        }

        // validation (store)

        // public async Store ({ request }: HttpContextContract) {
        //     const validationSchema = schema.create({
        //       roll_no: schema.string({}, [rules.unique({ table: 'students', column: 'roll_no' })]),
        //       stu_name: schema.string(),
        //     });
        
        //     const validatedData = await request.validate({
        //       schema: validationSchema,
        //     });
        //validation 
        const student = await Student.create(validatedData);

        return student;
      }
      public async up({ params, request }: HttpContextContract) {
        const validationSchema = schema.create({
          stu_name: schema.string(),
        });

       const validatedData = await request.validate({
            schema: validationSchema,
          });
      
          const student = await Student.findByOrFail('roll_no', params.roll_no);

    student.stuName = validatedData.stu_name;
    await student.save();

    return student;
  }
  public async del({ params }: HttpContextContract) {
    const validationSchema = schema.create({
      roll_no: schema.string(),
    });

    const validatedData = await request.validate({
      schema: validationSchema,
    });

    const student = await Student.findByOrFail('roll_no', validatedData.roll_no);
    await student.delete();

    return 'Student deleted successfully';
  }


     }

