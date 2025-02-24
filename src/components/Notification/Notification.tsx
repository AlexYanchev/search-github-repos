import React, { FC } from 'react';
import styles from './Notification.module.css';

interface NotificationProps {
  value: string | number;
}

const Notification: FC<NotificationProps> = ({ value }) => {
  return <div className={styles.container}>{value}</div>;
};
export default React.memo(Notification);
