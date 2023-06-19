import Svg, { Path } from "react-native-svg";

function CheckImg({ color, size }) {
  return (
    <Svg
      width={size ? "25" : "50"}
      height={size ? "25" : "50"}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M3 53.0002H28H53"
        stroke={color ? color : "black"}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M28.6161 10.8567L36.473 3L50.2222 16.7493L42.3655 24.6059M28.6161 10.8567L13.0423 26.4307C12.5213 26.9515 12.2287 27.6582 12.2287 28.3948V40.9934H24.8275C25.5641 40.9934 26.2705 40.7009 26.7916 40.1798L42.3655 24.6059M28.6161 10.8567L42.3655 24.6059"
        stroke={color ? color : "black"}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CheckImg;
