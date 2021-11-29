import { FC } from 'react'
import { AddCard } from '@components/AddCard/AddCard'
import { Card } from '@components/Card/Card'
import { PLANS_CARDS } from '@constants'
import classes from './Cards.module.scss'

type CardsProps = {
  search: string
}

export const Cards: FC<CardsProps> = ({ search }) => {
  const filteredCards = PLANS_CARDS.filter(({ name }) => name.toLowerCase().includes(search))

  return (
    <section className={classes.cards}>
      <div className={classes.grid}>
        <AddCard />
        {filteredCards.map(({ id, name, date, image, time, isMajor }) => (
          <Card key={id} name={name} date={date} image={image} time={time} isMajor={isMajor} />
        ))}
      </div>
    </section>
  )
}
