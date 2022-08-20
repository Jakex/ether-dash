import type { NextPage } from 'next'
import { ConstructedButton } from '../components/DiscordButton' 

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ether Dashboard</title>
        <meta name="description" content="The Management Portal for Ether Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.name}>Ether Development!</span>
        </h1>

        <p className={styles.description}>
          To proceed, please login using your Discord Account.
        </p>

        <ConstructedButton />
        
      </main>
    </div>
  )
}

export default Home
