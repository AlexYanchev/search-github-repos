import React, { FC } from 'react';
import { I_IconProps } from '../../../types/I_IconProps';

type HeartIconProps = I_IconProps & { isFavorite?: boolean };

const HeartIcon: FC<HeartIconProps> = ({
  size = '20',
  width,
  height,
  pathStrokeColor,
  isFavorite,
}) => {
  const widthSize = width ? width : size;
  const heightSize = height ? height : size;
  return (
    <svg
      width={widthSize}
      height={heightSize}
      viewBox={`0 0 ${17} ${13}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMidYMid'
    >
      <path
        d='M15.5 4.00188C15.5 8.68938 8 12.6667 8 12.6667C8 12.6667 0.5 8.68938 0.5 4.00188C0.5 2.98472 0.910284 2.00921 1.64059 1.28997C2.3709 0.570724 3.36142 0.166656 4.39423 0.166656C6.02332 0.166656 7.41875 1.04095 8 2.43938C8.58125 1.04095 9.97668 0.166656 11.6058 0.166656C12.6386 0.166656 13.6291 0.570724 14.3594 1.28997C15.0897 2.00921 15.5 2.98472 15.5 4.00188Z'
        fill={`rgba(var(--favorite-button-${isFavorite}), 1)`}
        stroke={pathStrokeColor}
        strokeWidth={`var(--favorite-button-stroke-width-${isFavorite})`}
      />
    </svg>
  );
  // return (
  //   <svg
  //     width={size}
  //     height={size}
  //     viewBox={`0 0 ${size} ${size}`}
  //     fill='none'
  //     xmlns='http://www.w3.org/2000/svg'
  //     style={style}
  //   >
  //     <path
  //       d='M17.5 8.00188C17.5 12.6894 10 16.6667 10 16.6667C10 16.6667 2.5 12.6894 2.5 8.00188C2.5 6.98472 2.91028 6.00921 3.64059 5.28997C4.3709 4.57072 5.36142 4.16666 6.39423 4.16666C8.02332 4.16666 9.41875 5.04095 10 6.43938C10.5813 5.04095 11.9767 4.16666 13.6058 4.16666C14.6386 4.16666 15.6291 4.57072 16.3594 5.28997C17.0897 6.00921 17.5 6.98472 17.5 8.00188Z'
  //       fill='rgb(var(--base-color))'
  //     />
  //   </svg>
  // );
};

export default HeartIcon;
