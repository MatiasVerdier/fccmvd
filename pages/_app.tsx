import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/index.css';
import Navigation from '@/components/navigation';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navigation />

      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
