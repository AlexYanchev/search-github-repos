import React, { FC, useMemo } from 'react';
import styles from './Profile.module.css';
import Avatar from '../Avatar/Avatar';
import HeartIcon from '../../asserts/icons/HeartIcon/HeartIcon';
import LinkIcon from '../../asserts/icons/LinkIcon/LinkIcon';
import Statistics from '../Statistics/Statistics';
import ActionButton from '../ActionButton/ActionButton';
import ActionsPanel from '../ActionsPanel/ActionsPanel';
import ActionIcon from '../ActionIcon/ActionIcon';
import CopiedRepoLinkIcon from '../CopiedRepoLinkIcon/CopiedRepoLinkIcon';
import ToggleFavoriteIcon from '../ToggleFavoriteIcon/ToggleFavoriteIcon';
import { I_OwnerRepo } from '../../types/I_OwnerRepo';
import { I_Repository } from '../../types/I_Repository';
import { useStore } from '../../providers/store/store';
import { observer } from 'mobx-react';

const Profile: FC = observer(() => {
  const { pagesStore, reposStore } = useStore();
  const repo = useMemo(() => {
    return reposStore.repos.find((repo) => repo.id === pagesStore.repoId);
  }, []);

  const onClick = () => {
    if (!repo) {
      return;
    }
    reposStore.toggleFavoriteRepos(repo);
  };

  return (
    <section className={styles.container}>
      {repo ? (
        <>
          <h1 className={styles.title}>Профиль</h1>
          <div className={styles.info}>
            <Avatar src={repo.owner.avatar_url} size={125} />
            <div className={styles.infoDetail}>
              <h2 className={styles.name}>{repo.name}</h2>
              <p className={styles.description}>{repo.description}</p>
            </div>
          </div>
          <Statistics />
          <ActionsPanel
            actionsIconGap='medium'
            actions={[
              <CopiedRepoLinkIcon size='medium' copiedText={repo.html_url} />,
              <ToggleFavoriteIcon
                size='medium'
                isFavorite={reposStore.favoriteReposIds.includes(repo.id)}
                onClick={onClick}
              />,
            ]}
            actionButtons={[
              <ActionButton
                text='Открыть репозиторий'
                pSize='medium'
                onAction={() => window.open(repo.html_url)}
              />,
            ]}
          />
        </>
      ) : (
        <p>Такого профиля нет</p>
      )}
    </section>
  );
});
export default Profile;
