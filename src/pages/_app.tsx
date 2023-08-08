// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

import { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle} from 'styled-components'
// import localFont from 'next/font/local'

// 글로벌 스타일
const GlobalStyle = createGlobalStyle`
html,
body,
textarea {
  paddig: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

a {
  cursor: pointer;
  text-decoration: none;
  transition: .25s;
  color: #000;
}

ol, ul {
  list-style: none;
}
`
// // Font files can be colocated inside of `pages`
// const myFont = localFont({ src: "./PretendardVariable.woff2" })

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
    <Head>
      <meta key="charset" name="charset" content='utf-8' />
      <meta key="viewport"
      name='viewport'
      content='width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5'
      />
      <meta property='og:locale' content='ko_KR' />
      <meta property='og:type' content='website' />
    </Head>
    <GlobalStyle />
    {/* <main className={myFont.className}> */}
    <Component {...pageProps} />
    {/* </main> */}
    </>
  )
}

export default MyApp