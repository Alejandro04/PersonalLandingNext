import '/styles/normalize.css'
import '/styles/global.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
     <Head>
      <script type="text/javascript" src="/js/nav.js"></script>
      <script type="text/javascript" src="/js/slider.js"></script>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp