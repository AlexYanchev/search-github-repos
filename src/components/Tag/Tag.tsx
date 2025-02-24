import React, { FC, ReactNode } from 'react';
import styles from './Tag.module.css';

interface TagProps {
  icon?: ReactNode;
  text: string | number;
}

const Tag: FC<TagProps> = ({ icon, text }) => {
  return (
    <div className={styles.container}>
      {icon}
      <p className={styles.text}>{text}</p>
    </div>
  );
};
export default React.memo(Tag);
