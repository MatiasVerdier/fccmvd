import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/index.css';
import '../styles/lite-yt-embed.css';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { pageView } from '../lib/gtag';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
