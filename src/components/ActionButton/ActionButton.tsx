import React, { FC } from 'react';
import styles from './ActionButton.module.css';

interface ActionButtonProps {
  text: string;
  pSize: 'small' | 'medium';
  onAction: () => void;
}

const ActionButton: FC<ActionButtonProps> = ({ text, pSize, onAction }) => {
  return (
    <button
      style={{ padding: `var(--action-button-padding-${pSize})` }}
      className={styles.actionButton}
      type='button'
      onClick={onAction}
    >
      {text}
    </button>
  );
};
export default ActionButton;
