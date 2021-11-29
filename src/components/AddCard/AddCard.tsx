import classes from './AddCard.module.scss'
import { ReactComponent as AddIcon } from './add.svg'

export const AddCard = () => (
  <button className={classes.addCard}>
    <AddIcon />
  </button>
)
