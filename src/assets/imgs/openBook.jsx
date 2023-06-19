import Svg, { Path } from "react-native-svg";

function OpenBook() {
  return (
    <Svg
      width="50"
      height="40"
      viewBox="0 0 56 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M28 43V8C28 5.23857 30.2385 3 33 3H51.5C52.3285 3 53 3.67157 53 4.5V37.2858"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <Path
        d="M28 43V8C28 5.23857 25.7615 3 23 3H4.5C3.67157 3 3 3.67157 3 4.5V37.2858"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <Path
        d="M33 38H53"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <Path d="M23 38H3" stroke="black" strokeWidth="5" strokeLinecap="round" />
      <Path
        d="M28 43C28 40.2385 30.2385 38 33 38"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M28 43C28 40.2385 25.7615 38 23 38"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default OpenBook;
