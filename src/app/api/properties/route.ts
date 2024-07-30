import connectDB from '@/app/config/db';

export const GET = async (request: any) => {
  try {
    await connectDB();
    return new Response('hello', { status: 200 });
  } catch (error) {
    return new Response('Something went wrong', { status: 500 });
  }
};
