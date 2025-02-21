import React, { FC } from 'react';
import { I_IconProps } from '../../../types/I_IconProps';

const LogoIcon: FC<I_IconProps> = ({ size = '24' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 11.8719C3 7.53154 6.53154 4 10.8719 4C15.2123 4 18.7439 7.53154 18.7439 11.8719C18.7434 13.6189 18.1584 15.3156 17.0819 16.6915L20.7118 20.3215C21.0961 20.7057 21.0961 21.3286 20.7118 21.7128C20.3276 22.097 19.7047 22.097 19.3205 21.7128L15.6905 18.0829C14.3147 19.1588 12.6185 19.7435 10.8719 19.7439C6.53154 19.7439 3 16.2123 3 11.8719ZM17.0393 10.1764C17.1289 10.5022 16.9032 10.8203 16.5703 10.8783C16.2374 10.9364 15.924 10.712 15.8271 10.3883C15.6211 9.70019 15.2732 9.0603 14.8036 8.51095C14.201 7.80603 13.4199 7.27612 12.5421 6.9767C11.6644 6.67728 10.7223 6.61936 9.81449 6.80902C9.10702 6.95683 8.44066 7.25075 7.85705 7.66948C7.58249 7.86647 7.19729 7.85254 6.96927 7.60315C6.74125 7.35375 6.75699 6.96407 7.02702 6.76091C7.77602 6.19741 8.64187 5.80386 9.56424 5.61116C10.6868 5.37663 11.8518 5.44825 12.9372 5.81851C14.0226 6.18877 14.9885 6.84406 15.7337 7.71575C16.346 8.43197 16.7909 9.27263 17.0393 10.1764Z'
        fill='rgb(var(--base-color))'
      />
    </svg>
  );
};

export default LogoIcon;
