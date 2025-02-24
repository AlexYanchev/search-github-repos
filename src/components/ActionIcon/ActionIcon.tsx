import React, { FC, ReactNode } from 'react';
import styles from './ActionIcon.module.css';

interface ActionIconProps {
  onClick: () => void;
  children: ReactNode;
  size: 'small' | 'medium';
}

const ActionIcon: FC<ActionIconProps> = ({ children, size, onClick }) => {
  return (
    <div
      style={{
        width: `var(--actions-icon-size-${size})`,
        height: `var(--actions-icon-size-${size})`,
      }}
      className={styles.icon}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
export default React.memo(ActionIcon);
