import styles from './Avatar.module.css';

const Avatar = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        alt='Аватар'
        src='https://avatars.mds.yandex.net/i?id=19285fd833cf68afd4265e908690d1d8_l-7761117-images-thumbs&n=13'
      />
    </div>
  );
};
export default Avatar;
