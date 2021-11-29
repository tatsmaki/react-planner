import { Contacts } from '@components/Contacts/Contacts'
import { Title } from '@components/Title/Title'
import { Navigation } from '@components/Navigation/Navigation'
import classes from './Footer.module.scss'

export const Footer = () => (
  <footer className={classes.footer}>
    <Title />
    <Navigation isFooterNav />
    <Contacts />
  </footer>
)
