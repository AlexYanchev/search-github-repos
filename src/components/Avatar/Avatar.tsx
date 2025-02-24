import React, { FC } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps {
  size: number;
  src: string;
}

const Avatar: FC<AvatarProps> = ({ size, src }) => {
  return (
    <div className={styles.container}>
      <img
        style={{ width: `${size}px`, height: `${size}px` }}
        className={styles.img}
        alt='Аватар'
        src={src}
      />
    </div>
  );
};
export default React.memo(Avatar);
