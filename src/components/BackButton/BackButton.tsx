import React, { FC } from 'react';
import styles from './BackButton.module.css';
import { useStore } from '../../providers/store/store';

const BackButton: FC = () => {
  const { pagesStore } = useStore();
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => pagesStore.goPrevPage()}>
        <img src='/images/icons/backButton.png' alt='Вернутся назад' />

        <span>Back</span>
      </button>
    </div>
  );
};
export default BackButton;
