import React, { FC, ReactNode } from 'react';
import styles from './ToggleFavoriteIcon.module.css';
import ActionIcon from '../ActionIcon/ActionIcon';
import HeartIcon from '../../asserts/icons/HeartIcon/HeartIcon';

interface ToggleFavoriteIconProps {
  onClick: () => void;
  isFavorite: boolean;
  size: 'small' | 'medium';
}

const ToggleFavoriteIcon: FC<ToggleFavoriteIconProps> = ({
  size,
  isFavorite,
  onClick,
}) => {
  const favoriteFill = isFavorite
    ? 'rgba(var(--favorite-button-true), 1)'
    : undefined;

  const defaultIcon = (
    <HeartIcon
      width='18'
      height='15'
      pathStrokeColor='rgba(var(--base-color-dark), 1)'
      pathStrokeWidth={isFavorite ? 0 : 1}
      pathFill={favoriteFill}
    />
  );
  const getIcon = () => {
    switch (size) {
      case 'medium': {
        return (
          <HeartIcon
            width='23'
            height='19'
            pathStrokeColor='rgba(var(--base-color-dark), 1)'
            pathStrokeWidth={isFavorite ? 0 : 1}
            pathFill={favoriteFill}
          />
        );
      }
      case 'small':
        return defaultIcon;
      default:
        return defaultIcon;
    }
  };
  return (
    <ActionIcon onClick={onClick} size={size}>
      {getIcon()}
    </ActionIcon>
  );
};
export default ToggleFavoriteIcon;
