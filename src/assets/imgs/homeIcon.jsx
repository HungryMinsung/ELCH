import { Svg, Path } from "react-native-svg";

export default function HomeIcon({ color }) {
  return (
    <Svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M2 8.11111L12 2L22 8.11111"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.7778 12V19.1111C19.7778 19.4793 19.4793 19.7778 19.1111 19.7778H4.8889C4.52071 19.7778 4.22223 19.4793 4.22223 19.1111V12"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
