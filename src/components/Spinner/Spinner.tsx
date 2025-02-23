import React, { FC } from 'react';
import styles from './Spinner.module.css';

interface SpinnerProps {
  size?: 'xs' | 's' | 'm' | 'lg';
}

const Spinner: FC<SpinnerProps> = ({ size = 'm' }) => {
  return (
    <div
      className={styles.spinner}
      style={{
        width: `var(--spinner-size-${size})`,
        height: `var(--spinner-size-${size})`,
      }}
    ></div>
  );
};
export default Spinner;
