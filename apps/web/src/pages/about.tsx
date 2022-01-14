import styles from '../styles/Home.module.css'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation';

export default function About() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{t('about:title')}</h1>
        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
