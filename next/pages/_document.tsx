import { Html, Head, Main, NextScript } from "next/document";
import { title } from "process";

export default function Document() {
  return (
    <Html lang="ja">
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet"></link>
    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
