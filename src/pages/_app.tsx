import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout';

declare global {
  interface Window {
    naver: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
