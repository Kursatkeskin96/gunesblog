import Blog from '../../../models/blog';
import { connectToDB } from '../../../utils/database';

export const GET = async (request) => {
  try {
    await connectToDB();

    const timestamp = Date.now(); // Generate a unique timestamp
    const blogs = await Blog.find({}).populate('creator');

    const response = new Response(JSON.stringify(blogs), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store', // Disable caching
      },
    });

    response.url += `?timestamp=${timestamp}`; // Append cache-busting query parameter

    return response;
  } catch (error) {
    const response = new Response('Failed to fetch all blogs', { status: 500 });
    return response;
  }
};