import React, { FC } from 'react';
import { I_IconProps } from '../../../types/I_IconProps';

const LinkIcon: FC<I_IconProps> = ({ size = '24' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.3478 17.0168L11.4698 18.8949C10.6259 19.7388 9.48126 20.2129 8.28779 20.2129C7.09432 20.2129 5.94972 19.7388 5.10581 18.8949C4.26189 18.051 3.78779 16.9064 3.78779 15.7129C3.78779 14.5194 4.26189 13.3748 5.10581 12.5309L6.94241 10.6943M10.6938 6.94289L12.5304 5.10629C13.3743 4.26238 14.5189 3.78827 15.7124 3.78827C16.9059 3.78827 18.0505 4.26238 18.8944 5.10629C19.7383 5.9502 20.2124 7.0948 20.2124 8.28827C20.2124 9.48174 19.7383 10.6263 18.8944 11.4703L17.0164 13.3483M9.11875 14.8819L14.9477 9.05294'
        stroke='#3A3A3A'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default LinkIcon;
