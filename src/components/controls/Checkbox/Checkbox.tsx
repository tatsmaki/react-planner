import { FC, ChangeEvent } from 'react'
import classes from './Checkbox.module.scss'

type CheckboxProps = {
  label?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: FC<CheckboxProps> = ({ label, onChange }) => {
  return (
    <label className={classes.checkbox}>
      <input className={classes.input} type="checkbox" onChange={onChange} />
      <span className={classes.label}>{label}</span>
    </label>
  )
}
