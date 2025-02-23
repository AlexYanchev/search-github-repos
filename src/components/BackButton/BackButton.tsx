import React, { FC } from 'react';
import styles from './BackButton.module.css';
import { E_Pages } from '../../types/E_Pages';
import { useStore } from '../../providers/store/store';

interface BackButtonProps {
  goTo: E_Pages;
}

const BackButton: FC<BackButtonProps> = ({ goTo }) => {
  const { pagesStore } = useStore();
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => pagesStore.setPage(goTo)}
      >
        <img src='images/icons/backButton.svg' alt='Вернутся назад' />
        <span>Back</span>
      </button>
    </div>
  );
};
export default BackButton;
