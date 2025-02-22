import React from 'react';
import styles from './Statistics.module.css';
import StatisticCard from '../StatisticCard/StatisticCard';
import StarIcon from '../../asserts/icons/StarIcon/StarIcon';
import ForkIcon from '../../asserts/icons/ForkIcon/ForkIcon';
import FolderIcon from '../../asserts/icons/FolderIcon/FolderIcon';
import ArchiveIcon from '../../asserts/icons/ArchiveIcon/ArchiveIcon';
import ConsoleIcon from '../../asserts/icons/ConsoleIcon/ConsoleIcon';
import CreateIcon from '../../asserts/icons/CreateIcon/CreateIcon';

const Statistics = () => {
  return (
    <div className={styles.container}>
      <StatisticCard icon={<StarIcon />} />
      <StatisticCard icon={<ForkIcon />} />
      <StatisticCard icon={<ArchiveIcon />} />
      <StatisticCard icon={<ConsoleIcon />} />
      <StatisticCard icon={<FolderIcon />} />
      <StatisticCard icon={<CreateIcon />} />
    </div>
  );
};
export default Statistics;
