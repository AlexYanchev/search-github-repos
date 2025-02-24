import { FC } from 'react';
import ActionIcon from '../ActionIcon/ActionIcon';
import LinkIcon from '../../asserts/icons/LinkIcon/LinkIcon';

interface CopiedRepoLinkIconProps {
  size: 'small' | 'medium';
  copiedText: string;
}

const CopiedRepoLinkIcon: FC<CopiedRepoLinkIconProps> = ({
  size,
  copiedText,
}) => {
  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(copiedText);
    } catch (e) {
      console.log(e);
    }
  };

  const defaultIcon = <LinkIcon width='20' height='20' />;
  const getIcon = () => {
    switch (size) {
      case 'medium': {
        return <LinkIcon width='24' height='24' />;
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
export default CopiedRepoLinkIcon;
