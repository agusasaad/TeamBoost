import Header from '@/components/header/Header'
import styles from './page.module.css'
import AboutUs from '@/components/aboutUs/AboutUs'
import TechStack from '@/components/techStack/TechStack'
import ContactUs from '@/components/contactUs/ContactUs'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container_home}>
        <video
          src='/video.mp4'
          loop
          preload='auto'
          muted
          autoPlay
          playsInline
        ></video>
        <Header />
      </div>
      <div className={styles.sections}>
        <TechStack />
        <AboutUs />
        {/* <ContactUs /> */}
      </div>
    </main>
  )
}
