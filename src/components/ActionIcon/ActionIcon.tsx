import React, { FC, ReactNode } from 'react';
import styles from './ActionIcon.module.css';

interface ActionIconProps {
  children: ReactNode;
  size: 'small' | 'medium';
}

const ActionIcon: FC<ActionIconProps> = ({ children, size }) => {
  return (
    <div
      style={{
        width: `var(--actions-icon-size-${size})`,
        height: `var(--actions-icon-size-${size})`,
      }}
      className={styles.icon}
    >
      {children}
    </div>
  );
};
export default ActionIcon;
