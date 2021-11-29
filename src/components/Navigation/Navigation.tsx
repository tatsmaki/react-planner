import { FC } from 'react'
import { Link } from '@controls/Link/Link'
import classes from './Navigation.module.scss'

type NavigationProps = {
  isFooterNav?: boolean
}

export const Navigation: FC<NavigationProps> = ({ isFooterNav }) => (
  <nav className={classes.navigation}>
    <Link to="calendar">Calendar</Link>
    <Link to="plans">Plans</Link>
    <Link to="to-do">To Do</Link>
  </nav>
)
