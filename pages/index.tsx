import Head from 'next/head';
import Hero from '@/components/hero';
import Featured from '@/components/blog/featured';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Free Code Camp Montevideo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <Featured />
    </div>
  );
}
