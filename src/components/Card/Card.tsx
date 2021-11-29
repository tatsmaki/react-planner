import { CardPicture } from '@components/CardPicture/CardPicture'
import { FC } from 'react'
import classes from './Card.module.scss'

type CardProps = {
  name: string
  date: string
  image?: string
  time?: string
  isMajor?: boolean
}

export const Card: FC<CardProps> = ({ name, date, image, time, isMajor }) => {
  const color = isMajor ? classes.cardMajor : classes.cardMinor
  const size = image ? classes.cardLarge : classes.cardSmall

  return (
    <article className={`${classes.card} ${color} ${size}`}>
      {image && <CardPicture image={image} />}

      <div className={classes.cardContent}>
        {!image && time && <h3 className={classes.cardHeader}>{time}</h3>}

        <div>
          <span className={classes.cardName}>{name}</span>

          <span className={classes.dateWithTime}>
            <span>{date}</span>
            {image && <span>{time}</span>}
          </span>
        </div>
      </div>
    </article>
  )
}
