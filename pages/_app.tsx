import React from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';
import '../styles/index.css';
import '../styles/lite-yt-embed.css';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

function MyApp({ Component, pageProps }: AppProps) {
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
