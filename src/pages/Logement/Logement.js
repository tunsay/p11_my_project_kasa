import Gallery from '../../components/Gallery/Gallery'
import Tag from '../../components/Tag/Tag'
import Rating from '../../components/Rating/Rating'
import Collapse from '../../components/Collapse/Collapse'
import Error from '../../pages/Error/Error'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import styles from './Logement.module.scss'
import Hostinfo from '../../components/Hostinfo/Hostinfo'

function Logement({ logements }) {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)

  useEffect(() => {
    if (logement) {
      document.title = `Kasa - ${logement.title}`
    }
  })

  return logement ? (
    <main>
      <section className={styles.container}>
        <Gallery pictures={logement.pictures} title={logement.title} />
        <div className={styles.content}>
          <div className={styles.content_wrapper}>
            <h2 className={styles.title}>{logement.title}</h2>
            <h3 className={styles.location}>{logement.location}</h3>
            <div className={styles.tags_wrapper}>
              {logement.tags.map((tag, index) => (
                <Tag key={index} tags={tag} />
              ))}
            </div>
          </div>

          <div className={styles.informations}>
            <Rating ratingValue={logement.rating} />
            <Hostinfo
              pictures={logement.host.picture}
              name={logement.host.name}
            />
          </div>
        </div>

        <div className={styles.wrapper}>
          <Collapse title="Description" content={logement.description} />
          <Collapse title="Équipements" content={logement.equipments} />
        </div>
      </section>
    </main>
  ) : (
    <Error />
  )
}

export default Logement
