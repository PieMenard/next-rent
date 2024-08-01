import connectDB from '@/app/config/db';
import Property from '@/models/Property';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

//GET /api/properties/id
export const GET = async (request: any, { params }: Params) => {
  try {
    await connectDB();

    const property = await Property.findById(params.id);
    if (!property) return new Response('Property Not Found', { status: 404 });

    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    return new Response('Something went wrong', { status: 500 });
  }
};
