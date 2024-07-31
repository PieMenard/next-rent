import connectDB from '@/app/config/db';
import Property from '@/models/Property';

//GET /api/properties
export const GET = async (request: any) => {
  try {
    await connectDB();

    const properties = await Property.find({});

    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    return new Response('Something went wrong', { status: 500 });
  }
};
