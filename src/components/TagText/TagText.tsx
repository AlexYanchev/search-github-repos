import { FC } from 'react';
import styles from './TagText.module.css';

interface TagTextProps {
  text: string | number;
}

const TagText: FC<TagTextProps> = ({ text }) => {
  return <p className={styles.container}>{text}</p>;
};
export default TagText;
