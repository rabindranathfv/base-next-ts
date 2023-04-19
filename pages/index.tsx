import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { LoginSection } from '../src/sections/login-section';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App with session</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginSection />
    </div>
  )
}


