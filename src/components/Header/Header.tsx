import { Title } from '@components/Title/Title'
import { Navigation } from '@components/Navigation/Navigation'
import classes from './Header.module.scss'

export const Header = () => (
  <header className={classes.header}>
    <Title />
    <Navigation />
  </header>
)
