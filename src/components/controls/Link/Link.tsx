import { FC } from 'react'
import { useLocation } from 'react-router'
import { Link as A } from 'react-router-dom'
import classes from './Link.module.scss'

type LinkProps = {
  to: string
  children: string
}

export const Link: FC<LinkProps> = ({ to, children }) => {
  const location = useLocation()

  const isActive = location.pathname.includes(to)

  return (
    <A className={isActive ? classes.linkActive : classes.link} to={to}>
      {children}
    </A>
  )
}
