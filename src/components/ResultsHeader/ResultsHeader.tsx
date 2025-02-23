import { FC, useState } from 'react';
import styles from './ResultsHeader.module.css';

interface ResultsHeaderProps {
  title: string;
}

const ResultsHeader: FC<ResultsHeaderProps> = ({ title }) => {
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div
        className={styles.selectContainer}
        data-isopen={openSelect}
        onClick={() => setOpenSelect(!openSelect)}
      >
        <select className={styles.select}>
          <option>New first</option>
        </select>
      </div>
    </div>
  );
};
export default ResultsHeader;
