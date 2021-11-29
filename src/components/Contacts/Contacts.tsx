import { ReactComponent as InstagramIcon } from './instagram.svg'
import { ReactComponent as FacebookIcon } from './facebook.svg'
import { ReactComponent as TwitterIcon } from './twitter.svg'
import classes from './Contacts.module.scss'

export const Contacts = () => {
  return (
    <div className={classes.contacts}>
      <a className={classes.icon} href="">
        <InstagramIcon />
      </a>
      <a className={classes.icon} href="">
        <FacebookIcon />
      </a>
      <a className={classes.icon} href="">
        <TwitterIcon />
      </a>
    </div>
  )
}
