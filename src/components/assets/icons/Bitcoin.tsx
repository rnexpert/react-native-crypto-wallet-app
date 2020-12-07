import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgBitcoin(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="#0D1F3C"
        fillRule="evenodd"
        d="M11.328 11.073c.884.236 2.8.745 3.135-.596.342-1.376-1.535-1.789-2.448-1.99-.1-.021-.19-.04-.262-.059l-.643 2.588.218.057zm-1 4.167c1.059.28 3.367.89 3.732-.587.378-1.505-1.857-2.01-2.954-2.257-.124-.029-.235-.053-.324-.076l-.71 2.854c.074.018.16.04.256.066zm6.962-4.95c-.172 1.17-.817 1.736-1.68 1.934 1.181.615 1.781 1.56 1.211 3.192-.712 2.032-2.4 2.205-4.647 1.777l-.543 2.187-1.317-.33.537-2.153a57.88 57.88 0 01-1.047-.274l-.54 2.164-1.316-.326.543-2.19c-.307-.079-.618-.162-.937-.24l-1.714-.428.652-1.508s.972.26.96.24c.372.09.537-.153.604-.314l.86-3.45c.048.01.093.022.138.033-.053-.022-.098-.034-.135-.045l.615-2.464c.015-.281-.083-.633-.615-.765 0-.018-.956-.24-.956-.24l.348-1.406 1.82.454-.004.007c.273.068.555.131.84.199l.54-2.164 1.316.33-.529 2.119c.353.082.71.161 1.054.247l.525-2.103 1.317.326-.537 2.164c1.662.574 2.877 1.432 2.637 3.026zM14.901.358C8.473-1.243 1.961 2.669.361 9.097c-1.606 6.431 2.306 12.942 8.734 14.543 6.432 1.605 12.943-2.306 14.545-8.738C25.245 8.474 21.333 1.96 14.9.359z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default SvgBitcoin;