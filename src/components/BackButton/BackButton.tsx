import React from 'react';
import styles from './BackButton.module.css';

const BackButton = () => {
  return (
    <button className={styles.button}>
      <img src='images/icons/backButton.svg' alt='Вернутся назад' />
      <span>Back</span>
    </button>
  );
};
export default BackButton;
