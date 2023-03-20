import starFilled from '../../assets/images/star_full.svg'
import starEmpty from '../../assets/images/star_empty.svg'
import styles from './Rating.module.scss'

function Rating({ ratingValue }) {
  const range = [1, 2, 3, 4, 5]
  return (
    <div className={styles.wrapper}>
      {range.map((rangeElement) =>
        ratingValue >= rangeElement ? (
          <img
            src={starFilled}
            key={rangeElement.toString()}
            alt="Star filled"
            className={styles.icon}
          />
        ) : (
          <img
            src={starEmpty}
            key={rangeElement.toString()}
            alt="Star unfilled"
            className={styles.icon}
          />
        )
      )}
    </div>
  )
}

export default Rating
