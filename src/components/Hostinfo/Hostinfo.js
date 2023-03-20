import styles from './Hostinfo.module.scss'

function Hostinfo({ pictures, name }) {
  return (
    <div className={styles.host}>
      <p className={styles.name}>{name}</p>
      <img src={pictures} alt={name} className={styles.picture} />
    </div>
  )
}

export default Hostinfo
