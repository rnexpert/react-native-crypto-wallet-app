import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgAlertTriangle(props: SvgProps) {
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
        fill="#000"
        fillRule="evenodd"
        d="M2 21.6c.5.3 1 .4 1.5.4h17c.8 0 1.5-.3 2-.9.6-.5.9-1.3.9-2.1 0-.5-.1-1-.4-1.5L14.6 3.4c-.5-.7-1.1-1.2-1.9-1.4-.8-.2-1.6-.1-2.3.3-.4.2-.8.6-1 1L.9 17.5C.1 18.9.6 20.8 2 21.6zm.7-3.1l8.4-14.1c.1-.2.2-.3.4-.4.5-.2 1.1-.1 1.4.4l8.4 14.1c.1.2.1.3.1.5 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3H3.5c-.1 0-.3 0-.4-.1-.5-.3-.7-.9-.4-1.4zM13 13V9c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1zm0 4c0 .3-.1.5-.3.7-.2.2-.4.3-.8.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.117.034-.2.063-.269.02-.048.037-.09.037-.131 0-.1.1-.2.2-.3.1-.1.2-.2.3-.2.2-.1.4-.1.6-.1.058.058.082.082.111.092.022.008.046.008.089.008.05 0 .075.025.1.05.025.025.05.05.1.05.1 0 .2.1.2.1.1.1.2.2.2.3.1.1.1.3.1.4z"
        clipRule="evenodd"
      />
      <Mask
        id="alert-triangle_svg__a"
        width={24}
        height={21}
        x={0}
        y={1}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M2 21.6c.5.3 1 .4 1.5.4h17c.8 0 1.5-.3 2-.9.6-.5.9-1.3.9-2.1 0-.5-.1-1-.4-1.5L14.6 3.4c-.5-.7-1.1-1.2-1.9-1.4-.8-.2-1.6-.1-2.3.3-.4.2-.8.6-1 1L.9 17.5C.1 18.9.6 20.8 2 21.6zm.7-3.1l8.4-14.1c.1-.2.2-.3.4-.4.5-.2 1.1-.1 1.4.4l8.4 14.1c.1.2.1.3.1.5 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3H3.5c-.1 0-.3 0-.4-.1-.5-.3-.7-.9-.4-1.4zM13 13V9c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1zm0 4c0 .3-.1.5-.3.7-.2.2-.4.3-.8.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.117.034-.2.063-.269.02-.048.037-.09.037-.131 0-.1.1-.2.2-.3.1-.1.2-.2.3-.2.2-.1.4-.1.6-.1.058.058.082.082.111.092.022.008.046.008.089.008.05 0 .075.025.1.05.025.025.05.05.1.05.1 0 .2.1.2.1.1.1.2.2.2.3.1.1.1.3.1.4z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#alert-triangle_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgAlertTriangle;
