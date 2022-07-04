import styles from './styles/Avatar.module.css';
import {ImgHTMLAttributes} from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean,
}

export const Avatar = ({hasBorder, ...props }: AvatarProps) => {

  return (
    <img
      className={ hasBorder ? styles.avatarWithBorder : styles.avatar }
      {...props}
    />

  )
}