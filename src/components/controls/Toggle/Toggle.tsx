import { FC } from 'react'
import classes from './Toggle.module.scss'

type ToggleProps = {
  options: Array<string>
  onChange?: () => void
}

export const Toggle: FC<ToggleProps> = ({ options }) => {
  return (
    <div className={classes.toggle}>
      {options.map((option) => (
        <label key={option} className={classes.option}>
          <input className={classes.input} type="checkbox" />
          <span className={classes.label}>
            <span>{option}</span>
          </span>
        </label>
      ))}
    </div>
  )
}
