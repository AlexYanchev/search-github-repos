import React, { FC } from 'react';
import { I_IconProps } from '../../../types/I_IconProps';

const AnonIcon: FC<I_IconProps> = ({ size = '20' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ display: 'block' }}
    >
      <path
        d='M10 2.5C10.9946 2.5 11.9484 2.89509 12.6517 3.59835C13.3549 4.30161 13.75 5.25544 13.75 6.25C13.75 7.24456 13.3549 8.19839 12.6517 8.90165C11.9484 9.60491 10.9946 10 10 10C9.00544 10 8.05161 9.60491 7.34835 8.90165C6.64509 8.19839 6.25 7.24456 6.25 6.25C6.25 5.25544 6.64509 4.30161 7.34835 3.59835C8.05161 2.89509 9.00544 2.5 10 2.5ZM10 10.8333C15 10.8333 17.5 13.5531 17.5 15.625V17.1C17.5 17.3209 17.3209 17.5 17.1 17.5H2.9C2.67909 17.5 2.5 17.3209 2.5 17.1V15.625C2.5 13.5531 5 10.8333 10 10.8333Z'
        fill='rgb(var(--base-color))'
      />
    </svg>
  );
};

export default AnonIcon;
