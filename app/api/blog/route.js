import Blog from '../../../models/blog'
import { connectToDB } from '../../../utils/database'

export const GET = async (request) => {
  try {
    await connectToDB()

    const blogs = await Blog.find({}).populate('creator')

    const response = new Response(JSON.stringify(blogs), { status: 200 });

    // Add cache-control headers to disable caching
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    response.headers.set('Surrogate-Control', 'no-store');

    return response;
  } catch (error) {
    return new Response("Failed to fetch all blogs", { status: 500 })
  }
}
