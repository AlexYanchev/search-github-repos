import React, { FC } from 'react';
import styles from './BackButton.module.css';
import { useStore } from '../../providers/store/store';

const BackButton: FC = () => {
  const { pagesStore } = useStore();
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => pagesStore.goPrevPage()}
        type='button'
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/icons/backButton.svg`}
          alt='Вернутся назад'
        />

        <span>Back</span>
      </button>
    </div>
  );
};
export default BackButton;
