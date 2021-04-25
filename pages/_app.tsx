import { useEffect } from 'react';
import Head from 'next/head';
import type { AppProps /*, AppContext */ } from 'next/app';
import { TinaProvider, TinaCMS } from 'tinacms';
import { GithubClient, TinacmsGithubProvider } from 'react-tinacms-github';
import { NextGithubMediaStore } from 'next-tinacms-github';
import splitbee from '@splitbee/web';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import '../styles/index.css';
import '../styles/lite-yt-embed.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    splitbee.init();
  }, []);

  const github = new GithubClient({
    proxy: '/api/proxy-github',
    authCallbackRoute: '/api/create-github-access-token',
    clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    baseRepoFullName: process.env.NEXT_PUBLIC_REPO_FULL_NAME,
    baseBranch: process.env.NEXT_PUBLIC_BASE_BRANCH,
  });

  const cms = new TinaCMS({
    enabled: !!pageProps.preview,
    apis: {
      github,
    },
    media: new NextGithubMediaStore(github),
    sidebar: pageProps.preview,
    toolbar: pageProps.preview,
  });

  return (
    <TinaProvider cms={cms}>
      <TinacmsGithubProvider
        onLogin={onLogin}
        onLogout={onLogout}
        error={pageProps.error}
      >
        <Head>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="alternate icon" href="/favicon.ico" />
          <title>Free Code Camp Montevideo</title>
        </Head>

        <div className="relative flex flex-col min-h-screen">
          <Navigation />

          <main className="flex-grow">
            <Component {...pageProps} />
          </main>

          <Footer />
        </div>
      </TinacmsGithubProvider>
    </TinaProvider>
  );
}

const onLogin = async () => {
  const token = localStorage.getItem('tinacms-github-token') || null;
  const headers = new Headers();

  if (token) {
    headers.append('Authorization', 'Bearer ' + token);
  }

  const resp = await fetch(`/api/preview`, { headers: headers });
  const data = await resp.json();

  if (resp.status == 200) window.location.href = window.location.pathname;
  else throw new Error(data.message);
};

const onLogout = () => {
  return fetch(`/api/exit-preview`).then(() => {
    window.location.reload();
  });
};
