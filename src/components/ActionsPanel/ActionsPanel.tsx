import React, { FC, ReactNode } from 'react';
import styles from './ActionsPanel.module.css';

interface ActionsPanelProps {
  actions: Array<ReactNode>;
  actionsIconSize: 'small' | 'medium';
  actionsIconGap: 'small' | 'medium';
  actionButtons: Array<ReactNode>;
}

const ActionsPanel: FC<ActionsPanelProps> = ({
  actions,
  actionButtons,
  actionsIconSize,
  actionsIconGap,
}) => {
  return (
    <div className={styles.container}>
      <div
        style={{ gap: `var(--actions-gap-${actionsIconGap})` }}
        className={styles.actions}
      >
        {actions.map((action, i) => {
          return (
            <div
              key={i}
              style={{
                width: `var(--actions-icon-size-${actionsIconSize})`,
                height: `var(--actions-icon-size-${actionsIconSize})`,
              }}
              className={styles.icon}
            >
              {action}
            </div>
          );
        })}
      </div>
      {actionButtons.map((button, i) => {
        return <React.Fragment key={i}>{button}</React.Fragment>;
      })}
    </div>
  );
};
export default ActionsPanel;
