import React, { FC, ReactNode } from 'react';
import styles from './StatisticCard.module.css';

interface StatisticCardProps {
  icon: ReactNode;
}

const StatisticCard: FC<StatisticCardProps> = ({ icon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.detail}>
        <p className={styles.detailTitle}>1329</p>
        <p className={styles.detailDescription}>Количество звезд</p>
      </div>
    </div>
  );
};
export default StatisticCard;
