import { ChangeEvent, FC } from 'react'
import { Checkbox } from '@controls/Checkbox/Checkbox'
import { Select } from '@controls/Select/Select'
import { Toggle } from '@controls/Toggle/Toggle'
import { Input } from '@controls/Input/Input'
import classes from './Filters.module.scss'

type FiltersProps = {
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Filters: FC<FiltersProps> = ({ handleSearch }) => {
  return (
    <section className={classes.filters}>
      <div className={classes.checkboxes}>
        <Checkbox label="Today" />
        <Checkbox label="Tomorrow" />
        <Checkbox label="Week" />
        <Checkbox label="Month" />
      </div>

      <div className={classes.selectWithToggle}>
        <Select>
          <option>All Plans</option>
          <option>Family</option>
          <option>Work</option>
          <option>Study</option>
          <option>Wish</option>
        </Select>
        <Toggle options={['Major', 'Minor']} />
      </div>

      <Input placeholder="Search for plans" onChange={handleSearch} />
    </section>
  )
}
