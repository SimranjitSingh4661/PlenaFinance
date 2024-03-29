import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.448 6c-3.155.511-5.815.496-8.88-.005-2.09-.341-3.97 1.489-3.473 3.545l1.767 7.316A2.804 2.804 0 0 0 5.589 19h6.853a2.804 2.804 0 0 0 2.728-2.144l1.764-7.302c.497-2.06-1.39-3.894-3.486-3.554Z"
      stroke={props?.black ? "#000" : "#fff"}
      strokeWidth={1.5}
    />
    <Path
      d="M5 8.832V4.5A3.5 3.5 0 0 1 8.5 1h1A3.5 3.5 0 0 1 13 4.5V9"
      stroke={props?.black ? "#000" : "#fff"}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SVGComponent;
