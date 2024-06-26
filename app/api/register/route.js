import {connectToDB} from '../../../utils/database'
import User from '../../../models/user'

export async function POST(req){
    try {
        await connectToDB()

        const {username, password} = await req.json()

        const isExisting = await User.findOne({username})

        if(isExisting){
            throw new Error("User already exists")
        }

        const newUser = await User.create({username, password})

        return new Response("User created", {status: 201})
    } catch (error) {
        return new Response(JSON.stringify(error.message), {status: 500})
    }
}