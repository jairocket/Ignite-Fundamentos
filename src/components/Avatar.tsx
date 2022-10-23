import styles from "./Avatar.module.css";
import { ImgHTMLAttributes } from "react";

//Interface Avatar herda todas as propriedades de uma tag <img/>

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ src, hasBorder = true }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
