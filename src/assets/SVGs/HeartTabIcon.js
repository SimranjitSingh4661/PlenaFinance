import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {COLORS} from '../../constants';

const SVGComponent = props => (
  <Svg
    width={props?.W || 26}
    height={props?.H || 26}
    viewBox="0 0 24 24"
    fill={props?.active ? COLORS.YELLOW_DARK : 'none'}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      clipRule="evenodd"
      d="M2.872 11.598c-1.073-3.35.18-7.179 3.698-8.312a6.007 6.007 0 0 1 5.43.912c1.455-1.125 3.572-1.505 5.42-.912 3.517 1.133 4.779 4.962 3.707 8.312-1.67 5.31-9.127 9.4-9.127 9.4s-7.402-4.028-9.128-9.4Z"
      stroke="#3E4554"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M2.872 11.598c-1.073-3.35.18-7.179 3.698-8.312a6.007 6.007 0 0 1 5.43.912c1.455-1.125 3.572-1.505 5.42-.912 3.517 1.133 4.779 4.962 3.707 8.312-1.67 5.31-9.127 9.4-9.127 9.4s-7.402-4.028-9.128-9.4Z"
      stroke="#000"
      strokeOpacity={0.2}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G
      opacity={0.4}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M16 6.7a2.781 2.781 0 0 1 1.917 2.422" stroke="#3E4554" />
      <Path
        d="M16 6.7a2.781 2.781 0 0 1 1.917 2.422"
        stroke="#000"
        strokeOpacity={0.2}
      />
    </G>
  </Svg>
);
export default SVGComponent;
