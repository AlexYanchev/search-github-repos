import React, { FC } from 'react';
import { I_IconProps } from '../../../types/I_IconProps';

const ConsoleIcon: FC<I_IconProps> = ({ size = '16' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.5 1H2.5C1.96974 1.00058 1.46137 1.21148 1.08643 1.58643C0.711479 1.96137 0.500579 2.46974 0.5 3V13C0.500579 13.5303 0.711479 14.0386 1.08643 14.4136C1.46137 14.7885 1.96974 14.9994 2.5 15H13.5C14.0303 14.9994 14.5386 14.7885 14.9136 14.4136C15.2885 14.0386 15.4994 13.5303 15.5 13V3C15.4994 2.46974 15.2885 1.96137 14.9136 1.58643C14.5386 1.21148 14.0303 1.00058 13.5 1ZM3 8C2.89641 8 2.79538 7.96782 2.71086 7.90792C2.62635 7.84802 2.56253 7.76334 2.52822 7.6656C2.49391 7.56785 2.49081 7.46186 2.51934 7.36228C2.54787 7.26269 2.60663 7.17443 2.6875 7.10969L4.69969 5.5L2.6875 3.89031C2.6362 3.84927 2.59349 3.79853 2.5618 3.74099C2.53011 3.68344 2.51007 3.62022 2.50282 3.55493C2.49556 3.48964 2.50124 3.42356 2.51952 3.36046C2.5378 3.29736 2.56834 3.23849 2.60938 3.18719C2.65041 3.13589 2.70115 3.09318 2.7587 3.06149C2.81624 3.0298 2.87947 3.00976 2.94476 3.0025C3.01005 2.99525 3.07613 3.00092 3.13923 3.01921C3.20232 3.03749 3.2612 3.06802 3.3125 3.10906L5.8125 5.10906C5.87112 5.1559 5.91845 5.21533 5.95098 5.28296C5.9835 5.35058 6.00039 5.42465 6.00039 5.49969C6.00039 5.57472 5.9835 5.6488 5.95098 5.71642C5.91845 5.78404 5.87112 5.84347 5.8125 5.89031L3.3125 7.89031C3.22382 7.96131 3.1136 8 3 8ZM8 8H6C5.86739 8 5.74021 7.94732 5.64645 7.85355C5.55268 7.75979 5.5 7.63261 5.5 7.5C5.5 7.36739 5.55268 7.24021 5.64645 7.14645C5.74021 7.05268 5.86739 7 6 7H8C8.13261 7 8.25979 7.05268 8.35355 7.14645C8.44732 7.24021 8.5 7.36739 8.5 7.5C8.5 7.63261 8.44732 7.75979 8.35355 7.85355C8.25979 7.94732 8.13261 8 8 8Z'
        fill='black'
      />
    </svg>
  );
};

export default ConsoleIcon;
