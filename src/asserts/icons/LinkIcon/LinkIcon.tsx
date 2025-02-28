import React, { FC } from 'react';
import { I_IconProps } from '../../../types/I_IconProps';

const LinkIcon: FC<I_IconProps> = ({ size = '24', width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${20} ${20}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.3478 15.0168L9.46977 16.8949C8.62586 17.7388 7.48126 18.2129 6.28779 18.2129C5.09432 18.2129 3.94972 17.7388 3.10581 16.8949C2.26189 16.051 1.78779 14.9064 1.78779 13.7129C1.78779 12.5194 2.26189 11.3748 3.10581 10.5309L4.94241 8.69431M8.69383 4.94289L10.5304 3.10629C11.3743 2.26238 12.5189 1.78827 13.7124 1.78827C14.9059 1.78827 16.0505 2.26238 16.8944 3.10629C17.7383 3.9502 18.2124 5.0948 18.2124 6.28827C18.2124 7.48174 17.7383 8.62634 16.8944 9.47025L15.0164 11.3483M7.11875 12.8819L12.9477 7.05294'
        strokeLinecap='round'
        strokeLinejoin='round'
        stroke={'rgba(var(--base-color-dark), 1)'}
        strokeWidth={2}
      />
    </svg>
  );
};

export default LinkIcon;
