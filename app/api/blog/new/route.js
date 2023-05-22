import Blog from '../../../../models/blog'
import { connectToDB } from "../../../../utils/database";
import { verifyJwtToken, verifyToken } from '@/lib/jwt'

export const POST = async (request) => {
    await connectToDB()

    const accessToken = req.headers.get("authorization")
    const token = accessToken.split(' ')[1]

    const decodedToken = verifyJwtToken(token)

    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    }

    try {
        const body = await req.json()
        const newBlog = await Blog.create(body)

        return new Response(JSON.stringify(newBlog), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}