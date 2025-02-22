import React, { FC, ReactNode } from 'react';
import styles from './Tag.module.css';

interface TagProps {
  elements: Array<ReactNode>;
}

const Tag: FC<TagProps> = ({ elements }) => {
  return (
    <div className={styles.container}>
      {elements.map((element, i) => {
        return <React.Fragment key={i}>{element}</React.Fragment>;
      })}
    </div>
  );
};
export default Tag;
