import React, { FC, ReactNode } from 'react';
import styles from './StatisticCard.module.css';

interface StatisticCardProps {
  icon: ReactNode;
  value: number | string;
  text: string;
}

const StatisticCard: FC<StatisticCardProps> = ({ icon, value, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.detail}>
        <p className={styles.detailTitle}>{value}</p>
        <p className={styles.detailDescription}>{text}</p>
      </div>
    </div>
  );
};
export default StatisticCard;
