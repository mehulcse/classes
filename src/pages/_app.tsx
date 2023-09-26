import type { AppProps } from 'next/app';
import { Jost } from 'next/font/google';

import '@/styles/globals.css';

const jost = Jost({ subsets: ['latin'], variable: '--font-jost' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${jost.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
