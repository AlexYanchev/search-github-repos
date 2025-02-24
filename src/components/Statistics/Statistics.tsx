import React, { useMemo } from 'react';
import styles from './Statistics.module.css';
import StatisticCard from '../StatisticCard/StatisticCard';
import StarIcon from '../../asserts/icons/StarIcon/StarIcon';
import ForkIcon from '../../asserts/icons/ForkIcon/ForkIcon';
import FolderIcon from '../../asserts/icons/FolderIcon/FolderIcon';
import ArchiveIcon from '../../asserts/icons/ArchiveIcon/ArchiveIcon';
import ConsoleIcon from '../../asserts/icons/ConsoleIcon/ConsoleIcon';
import CreateIcon from '../../asserts/icons/CreateIcon/CreateIcon';
import { useStore } from '../../providers/store/store';

const Statistics = () => {
  const { reposStore } = useStore();
  const activeRepo = useMemo(() => {
    return reposStore.activeRepo;
  }, [reposStore.activeRepo]);

  return (
    <div className={styles.container}>
      {activeRepo && (
        <>
          <StatisticCard
            icon={<StarIcon />}
            value={activeRepo.stargazers_count.toLocaleString()}
            text='Количество звезд'
          />
          <StatisticCard
            icon={<ForkIcon />}
            value={activeRepo.forks_count.toLocaleString()}
            text='Количество форков'
          />
          <StatisticCard
            icon={<ArchiveIcon />}
            value={activeRepo.archived ? 'Да' : 'Нет'}
            text='В архиве'
          />
          <StatisticCard
            icon={<ConsoleIcon />}
            value={activeRepo.language || '-'}
            text='Язык'
          />
          <StatisticCard
            icon={<FolderIcon />}
            value={new Date(activeRepo.created_at).toLocaleDateString()}
            text='Создано'
          />
          <StatisticCard
            icon={<CreateIcon />}
            value={new Date(activeRepo.updated_at).toLocaleDateString()}
            text='Изменено'
          />
        </>
      )}
    </div>
  );
};
export default Statistics;
