import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}> 
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/boldbar.svg"
          alt="Next.js Logo"
          width={1800}
          height={370}
          priority
        />
      </div>
    </main>
  )
}
