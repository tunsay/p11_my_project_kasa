import styles from './About.module.scss'
import aboutBanner from '../../assets/images/about_image.png'
import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import { useEffect } from 'react'
import aboutContent from '../../datas/about'

function About() {
  useEffect(() => {
    document.title = `Kasa - A propos`
  })
  return (
    <div className={styles.container}>
      <Banner image={aboutBanner} />
      <div className={styles.wrapper}>
        {aboutContent.map((content, index) => (
          <Collapse
            key={index}
            title={content.title}
            content={content.description}
          />
        ))}
      </div>
    </div>
  )
}

export default About
