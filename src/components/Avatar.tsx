import styles from './Avatar.module.css'

export const Avatar = ({hasBorder, src}) => {
  
  // hasBorder
  
  return (
    <img
      className={ hasBorder ? styles.avatarWithBorder : styles.avatar }
      alt="avatar" src={ src }/>
  )
}