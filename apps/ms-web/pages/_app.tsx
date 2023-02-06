import { AppProps } from 'next/app';
import Head from 'next/head';
import LogoHeader from '../components/LogoHeader/LogoHeader';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mystery Skools</title>
      </Head>
      <main className="app">
        <LogoHeader />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
