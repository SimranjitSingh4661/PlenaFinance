import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {COLORS} from '../../constants';

const SVGComponent = props => (
  <Svg
    width={props?.W || 26}
    height={props?.H || 26}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      clipRule="evenodd"
      d="M14.725 3.43a3.75 3.75 0 0 0-5.462 0L4.27 8.736a3.75 3.75 0 0 0-1.019 2.57v5.992a3.75 3.75 0 0 0 3.516 3.743l5.234.327 5.232-.327a3.75 3.75 0 0 0 3.516-3.745l-.003-5.985a3.75 3.75 0 0 0-1.02-2.568l-5-5.313Zm-2.856 9.647a.25.25 0 0 1 .262 0l2 1.228a.25.25 0 0 1 .119.213v2.598a.75.75 0 1 0 1.5 0v-2.598a1.75 1.75 0 0 0-.834-1.491l-2-1.228a1.75 1.75 0 0 0-1.832 0l-2 1.228a1.75 1.75 0 0 0-.834 1.491v2.598a.75.75 0 1 0 1.5 0v-2.598a.25.25 0 0 1 .12-.213l2-1.228Z"
      stroke={props?.active ? COLORS.YELLOW_DARK : '#000'}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SVGComponent;
