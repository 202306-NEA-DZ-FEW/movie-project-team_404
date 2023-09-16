import "@/styles/globals.css"
import Layout from "@/components/layout"

import { AppProgressBar as ProgressBar } from "next-nprogress-bar"
export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />

        <ProgressBar
          height="5px"
          color={"linear-gradient(to top, #00b4db, #0083b0)"}
          options={{ showSpinner: false }}
        />
      </Layout>
    </>
  )
}
