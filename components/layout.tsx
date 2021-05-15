import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'ミーアキャットと２人暮らし'
export const siteTitle = 'ミーアキャットブログ'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="ミーアキャットと２人暮らし始めました。写真をタップすると次の写真が見れるようになっています。"
        />
        <meta
          property="og:image"
          content="https://og-image.vercel.app/**meerkat**%20blog.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fremojansen%2Flogo.ts%40master%2Fts.svg&images=https%3A%2F%2Fstorage.googleapis.com%2Fmeerkat-photos%2Fmeerkats%2FiOS_%25E3%2581%25AE%25E7%2594%25BB%25E5%2583%258F_4.jpg%3FExpires%3D1621153240%26GoogleAccessId%3Duploadstrage-32%2540meerkat-312510.iam.gserviceaccount.com%26Signature%3DSAbxHy0Yn5Ve%252BK4dn2qJN7QuOY1GDZ9m%252BNKDtHS4Y%252BMJmhyC35qDgrza5TKu7YsLuif7Bm1Mbe%252F6MmJAKpLSvV%252BK8TEDGr4mBR5ZtS3hwFUsLGNdAvll%252FVm5z1enIkulCGe9lODfse1Q%252FzSIqth9V7hoxC6BWpH9JFMDvdXatstPUE5KuU4H3PFHPYyQB2kUTvcDbzwLinRbQSzVVsglxacOLIfwf9ub3bi4yuenZ4nu1klbotitnIBZbnNKnazJGyBMGAWQvu4No7ADKAG1Wcyhvf060iTRRBZJIxwOGXMIQ32tbaRSdZXb33UzdJdaCeIsjuZ2M8qfyjXQ71vXqA%253D%253D"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.headingMd}>{name}</h1>
          </>
        ) : (
          <>
            <h2 className={utilStyles.headingMd}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
