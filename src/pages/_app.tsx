import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout';
import { SessionProvider } from 'next-auth/react';
import Script from 'next/script';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_JAVASCRIPT}&autoload=false&libraries=services`}
      />
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}
