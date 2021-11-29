import { FC } from 'react'
import { ReactComponent as ArrowIcon } from './arrow.svg'
import classes from './Select.module.scss'

type SelectProps = {
  children: any
}

export const Select: FC<SelectProps> = ({ children }) => {
  return (
    <div className={classes.select}>
      {/* <select>{children}</select> */}
      <div className={classes.options}>
        <div className={classes.selectedOption}>All Plans</div>
        <div className={classes.arrow}>
          <ArrowIcon />
        </div>
      </div>
    </div>
  )
}
