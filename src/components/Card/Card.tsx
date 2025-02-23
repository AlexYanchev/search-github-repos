import ForkIcon from '../../asserts/icons/ForkIcon/ForkIcon';
import StarIcon from '../../asserts/icons/StarIcon/StarIcon';
import Avatar from '../Avatar/Avatar';
import Tag from '../Tag/Tag';
import styles from './Card.module.css';
import HeartIcon from '../../asserts/icons/HeartIcon/HeartIcon';
import LinkIcon from '../../asserts/icons/LinkIcon/LinkIcon';
import ActionsPanel from '../ActionsPanel/ActionsPanel';
import ActionButton from '../ActionButton/ActionButton';
import { I_Repository } from '../../types/I_Repository';
import { FC } from 'react';
import ActionIcon from '../ActionIcon/ActionIcon';

interface CardProps {
  repo: I_Repository;
}

const Card: FC<CardProps> = ({ repo }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.infoContainer}>
        <Avatar src={repo.owner.avatar_url} size={32} />

        <div className={styles.statusInfo}>
          <Tag icon={<StarIcon />} text={repo.stargazers_count} />
          <Tag icon={<ForkIcon />} text={repo.forks_count} />
        </div>
      </div>
      <div className={styles.loginContainer}>
        <p className={styles.login}>@{repo.owner.login}</p>
        <p className={styles.repoLink}>{repo.full_name}</p>
      </div>
      <ActionsPanel
        actionsIconGap='small'
        actions={[
          <ActionIcon size='small'>
            <HeartIcon
              width='18'
              height='15'
              pathStrokeColor='rgba(var(--base-color-dark), 1)'
              pathStrokeWidth={1}
            />
          </ActionIcon>,
          <ActionIcon size='small'>
            <LinkIcon
              width='20'
              height='20'
              pathStrokeColor='rgba(var(--base-color-dark), 1)'
              pathStrokeWidth={2}
            />
          </ActionIcon>,
        ]}
        actionButtons={[<ActionButton text='Подробнее' pSize='small' />]}
      />
    </div>
  );
};
export default Card;
