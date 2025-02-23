import React from 'react';
import styles from './Profile.module.css';
import Avatar from '../Avatar/Avatar';
import HeartIcon from '../../asserts/icons/HeartIcon/HeartIcon';
import LinkIcon from '../../asserts/icons/LinkIcon/LinkIcon';
import Statistics from '../Statistics/Statistics';
import ActionButton from '../ActionButton/ActionButton';
import ActionsPanel from '../ActionsPanel/ActionsPanel';
import ActionIcon from '../ActionIcon/ActionIcon';

const Profile = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Профиль</h1>
      <div className={styles.info}>
        <Avatar src='' size={125} />
        <div className={styles.infoDetail}>
          <h2 className={styles.name}>tanya-ling/middle-russian-parser</h2>
          <p className={styles.description}>
            Программа для автоматической лемматизации и морфологического анализа
            русских текстов 15—17 вв
          </p>
        </div>
      </div>
      <Statistics />
      <ActionsPanel
        actionsIconGap='medium'
        actions={[
          <ActionIcon size='medium'>
            <LinkIcon
              width='24'
              height='24'
              pathStrokeColor='rgba(var(--base-color-dark), 1)'
              pathStrokeWidth={2}
            />
          </ActionIcon>,
          <ActionIcon size='medium'>
            <HeartIcon
              width='23'
              height='19'
              pathStrokeColor='rgba(var(--base-color-dark), 1)'
              pathStrokeWidth={1}
            />
          </ActionIcon>,
        ]}
        actionButtons={[
          <ActionButton text='Открыть репотизторий' pSize='medium' />,
        ]}
      />
    </section>
  );
};
export default Profile;
