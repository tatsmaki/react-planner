import { FC, ChangeEvent } from 'react'
import classes from './Input.module.scss'
import { ReactComponent as SearchIcon } from './search.svg'

type InputProps = {
  placeholder?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = ({ placeholder, onChange }) => {
  return (
    <div className={classes.inputWithIcon}>
      <SearchIcon />
      <input className={classes.input} type="text" placeholder={placeholder} onChange={onChange} />
    </div>
  )
}
