import ForkIcon from '../../asserts/icons/ForkIcon/ForkIcon';
import StarIcon from '../../asserts/icons/StarIcon/StarIcon';
import Avatar from '../Avatar/Avatar';
import Tag from '../Tag/Tag';
import styles from './Card.module.css';
import TagText from '../TagText/TagText';
import HeartIcon from '../../asserts/icons/HeartIcon/HeartIcon';
import LinkIcon from '../../asserts/icons/LinkIcon/LinkIcon';

const Card = () => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.infoContainer}>
        <Avatar size={32} />

        <div className={styles.statusInfo}>
          <Tag elements={[<StarIcon />, <TagText text={1329} />]} />
          <Tag elements={[<ForkIcon />, <TagText text={234} />]} />
        </div>
      </div>
      <div className={styles.loginContainer}>
        <p className={styles.login}>@tinghuiz</p>
        <p className={styles.loginLink}>tinghuiz/SfMLearner</p>
      </div>
      <div className={styles.controlButtons}>
        <div className={styles.favoritePanel}>
          <HeartIcon
            boxClassName={styles.icons}
            width='18'
            height='15'
            pathStrokeColor='rgba(var(--base-color-dark), 1)'
            pathStrokeWidth={1}
          />
          <LinkIcon
            width='20'
            height='20'
            boxClassName={styles.icons}
            pathStrokeColor='rgba(var(--base-color-dark), 1)'
            pathStrokeWidth={2}
          />
        </div>
        <button className={styles.detailedButton} type='button'>
          Подробнее
        </button>
      </div>
    </div>
  );
};
export default Card;
