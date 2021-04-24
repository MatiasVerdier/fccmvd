import { useEffect } from 'react';
import Head from 'next/head';
import type { AppProps /*, AppContext */ } from 'next/app';
import splitbee from '@splitbee/web';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import '../styles/index.css';
import '../styles/lite-yt-embed.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    splitbee.init();
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <title>Free Code Camp Montevideo</title>
      </Head>

      <div className="flex flex-col min-h-screen">
        <Navigation />

        <main className="flex-grow">
          <Component {...pageProps} />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default MyApp;
