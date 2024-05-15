import "@/styles/globals.css";
import { notoSansJP } from "@/utils/fonts/fonts";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component className={notoSansJP.className} {...pageProps} />;
}
