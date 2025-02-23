import ForkIcon from '../../asserts/icons/ForkIcon/ForkIcon';
import StarIcon from '../../asserts/icons/StarIcon/StarIcon';
import Avatar from '../Avatar/Avatar';
import Tag from '../Tag/Tag';
import styles from './Card.module.css';
import HeartIcon from '../../asserts/icons/HeartIcon/HeartIcon';
import LinkIcon from '../../asserts/icons/LinkIcon/LinkIcon';
import ActionsPanel from '../ActionsPanel/ActionsPanel';
import ActionButton from '../ActionButton/ActionButton';

const Card = () => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.infoContainer}>
        <Avatar size={32} />

        <div className={styles.statusInfo}>
          <Tag icon={<StarIcon />} text={1329} />
          <Tag icon={<ForkIcon />} text={234} />
        </div>
      </div>
      <div className={styles.loginContainer}>
        <p className={styles.login}>@tinghuiz</p>
        <p className={styles.loginLink}>tinghuiz/SfMLearner</p>
      </div>
      <ActionsPanel
        actionsIconGap='small'
        actionsIconSize='small'
        actions={[
          <HeartIcon
            width='18'
            height='15'
            pathStrokeColor='rgba(var(--base-color-dark), 1)'
            pathStrokeWidth={1}
          />,
          <LinkIcon
            width='20'
            height='20'
            pathStrokeColor='rgba(var(--base-color-dark), 1)'
            pathStrokeWidth={2}
          />,
        ]}
        actionButtons={[<ActionButton text='Подробнее' pSize='small' />]}
      />
    </div>
  );
};
export default Card;
