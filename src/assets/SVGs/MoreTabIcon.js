import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      fill="#3E4554"
    />
    <Path
      d="M12 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      fill="#000"
      fillOpacity={0.2}
    />
  </Svg>
);
export default SVGComponent;
