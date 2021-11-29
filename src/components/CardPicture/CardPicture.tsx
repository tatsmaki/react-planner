import { FC } from 'react'
import classes from './CardPicture.module.scss'

const MOBILE_URL = `${process.env.PUBLIC_URL}/assets/mobile`
const TABLET_URL = `${process.env.PUBLIC_URL}/assets/tablet`
const DEFAULT_URL = `${process.env.PUBLIC_URL}/assets`

type CardPictureProps = {
  image: string
}

export const CardPicture: FC<CardPictureProps> = ({ image }) => (
  <picture className={classes.picture}>
    <source media="(max-width: 768px)" srcSet={`${MOBILE_URL}/${image}.jpg`} />
    <source media="(max-width: 1440px)" srcSet={`${TABLET_URL}/${image}.jpg`} />
    <img className={classes.image} src={`${DEFAULT_URL}/${image}.jpg`} alt={image} />
  </picture>
)
