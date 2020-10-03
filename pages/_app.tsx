import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/index.css';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-grow">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  );
}

export default MyApp;
