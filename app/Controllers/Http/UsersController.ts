import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
    public async index(ctx: HttpContextContract){
        return User.all(); //select * from users (table_name)
    }

    public async store({request, response}: HttpContextContract){
        
        const body = request.body();

        const users = await User.create(body); //create instance and save in one go

               response.status(201);

                return users;

    }
    public async show({params}: HttpContextContract){
        return User.findOrFail(params.id);

    }

    public async update({ params, request}: HttpContextContract){
        const body= request.body();

        const users= await User.findOrFail(params.id);

        users.name=body.name

        return users.save();
    }

    public async destroy({params}: HttpContextContract){
        const users = await User.findOrFail(params.id);
        return users.delete();

    }


}
