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
import ToggleFavoriteIcon from '../ToggleFavoriteIcon/ToggleFavoriteIcon';
import CopiedRepoLinkIcon from '../CopiedRepoLinkIcon/CopiedRepoLinkIcon';
import { observer } from 'mobx-react';
import { useStore } from '../../providers/store/store';
import { E_Pages } from '../../types/E_Pages';

interface CardProps {
  repo: I_Repository;
}

const Card: FC<CardProps> = observer(({ repo }) => {
  const { reposStore: store, pagesStore } = useStore();
  const onClick = () => {
    store.toggleFavoriteRepos(repo);
  };
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
          <ToggleFavoriteIcon
            size='small'
            onClick={onClick}
            isFavorite={Boolean(store.favoriteRepos[repo.id])}
          />,
          <CopiedRepoLinkIcon size='small' copiedText={repo.html_url} />,
        ]}
        actionButtons={[
          <ActionButton
            text='Подробнее'
            pSize='small'
            onAction={() => pagesStore.setPage(E_Pages.PROFILE, repo.id)}
          />,
        ]}
      />
    </div>
  );
});
export default Card;
