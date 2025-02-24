import React, { FC, ReactNode } from 'react';
import styles from './ActionsPanel.module.css';

interface ActionsPanelProps {
  actions: Array<ReactNode>;
  actionsIconGap: 'small' | 'medium';
  actionButtons: Array<ReactNode>;
}

const ActionsPanel: FC<ActionsPanelProps> = ({
  actions,
  actionButtons,
  actionsIconGap,
}) => {
  return (
    <div className={styles.container}>
      <div
        style={{ gap: `var(--actions-gap-${actionsIconGap})` }}
        className={styles.actions}
      >
        {actions.map((action, i) => {
          return <React.Fragment key={i}>{action}</React.Fragment>;
        })}
      </div>
      {actionButtons.map((button, i) => {
        return <React.Fragment key={i}>{button}</React.Fragment>;
      })}
    </div>
  );
};
export default React.memo(ActionsPanel);
