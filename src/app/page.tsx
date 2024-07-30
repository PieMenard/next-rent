import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import connectDB from './config/db';

export default async function Home() {
  await connectDB();
  return (
    <>
      <Hero />
      <InfoBoxes />
    </>
  );
}
