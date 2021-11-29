import { ChangeEvent, useState } from 'react'
import { Filters } from '@components/Filters/Filters'
import { Cards } from '@components/Cards/Cards'
import classes from './Plans.module.scss'

export const Plans = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)

  return (
    <main className={classes.plans}>
      <Filters handleSearch={handleSearch} />
      <Cards search={search.toLowerCase()} />
    </main>
  )
}
