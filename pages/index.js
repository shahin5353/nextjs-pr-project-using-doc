import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next JS First App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className={styles.container}> */}
        <div>
          <h1>Welcome To Next JS</h1>
        </div>
      {/* </div> */}
    </>
  )
}
