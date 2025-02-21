import React, { FC } from 'react';
import { I_IconProps } from '../../../types/I_IconProps';

const HeartIcon: FC<I_IconProps> = ({ size = '20' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17.5 8.00188C17.5 12.6894 10 16.6667 10 16.6667C10 16.6667 2.5 12.6894 2.5 8.00188C2.5 6.98472 2.91028 6.00921 3.64059 5.28997C4.3709 4.57072 5.36142 4.16666 6.39423 4.16666C8.02332 4.16666 9.41875 5.04095 10 6.43938C10.5813 5.04095 11.9767 4.16666 13.6058 4.16666C14.6386 4.16666 15.6291 4.57072 16.3594 5.28997C17.0897 6.00921 17.5 6.98472 17.5 8.00188Z'
        fill='rgb(var(--base-color))'
      />
    </svg>
  );
};

export default HeartIcon;
