import React, { FC, useMemo } from 'react';
import styles from './Profile.module.css';
import Avatar from '../Avatar/Avatar';
import Statistics from '../Statistics/Statistics';
import ActionButton from '../ActionButton/ActionButton';
import ActionsPanel from '../ActionsPanel/ActionsPanel';
import CopiedRepoLinkIcon from '../CopiedRepoLinkIcon/CopiedRepoLinkIcon';
import ToggleFavoriteIcon from '../ToggleFavoriteIcon/ToggleFavoriteIcon';
import { useStore } from '../../providers/store/store';
import { observer } from 'mobx-react';

const Profile: FC = observer(() => {
  const { reposStore } = useStore();
  const repo = useMemo(() => {
    return reposStore.activeRepo;
  }, []);

  const onClick = () => {
    if (!repo) {
      return;
    }
    reposStore.toggleFavoriteRepos(repo);
  };

  return (
    <section className={styles.container}>
      {repo && (
        <>
          <h1 className={styles.title}>Профиль</h1>
          <div className={styles.info}>
            <Avatar src={repo.owner.avatar_url} size={125} />
            <div className={styles.infoDetail}>
              <h2 className={styles.name}>{repo.full_name}</h2>
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
      )}
    </section>
  );
});
export default Profile;
