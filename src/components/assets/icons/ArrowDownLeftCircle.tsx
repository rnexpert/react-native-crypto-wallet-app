import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgArrowDownLeftCircle(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.222 4.222a10.968 10.968 0 0115.556 0 10.968 10.968 0 010 15.556 10.968 10.968 0 01-15.556 0 10.968 10.968 0 010-15.556zm14.142 14.142a8.963 8.963 0 000-12.728 8.963 8.963 0 00-12.728 0 8.963 8.963 0 000 12.728 8.963 8.963 0 0012.728 0zM8.319 15.301a.359.359 0 00-.067-.119c-.07-.07-.07-.212-.07-.354V9.172c0-.566.424-.99.99-.99.565 0 .99.424.99.99v3.252l3.96-3.96c.424-.424.99-.424 1.414 0 .424.425.424.99 0 1.415l-3.96 3.96h3.252c.566 0 .99.424.99.99 0 .282-.07.494-.282.707-.213.212-.425.282-.708.282H9.172c-.142 0-.283 0-.354-.07-.141 0-.283-.142-.354-.212a.653.653 0 01-.145-.235z"
        clipRule="evenodd"
      />
      <Mask
        id="arrow-down-left-circle_svg__a"
        width={24}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.222 4.222a10.968 10.968 0 0115.556 0 10.968 10.968 0 010 15.556 10.968 10.968 0 01-15.556 0 10.968 10.968 0 010-15.556zm14.142 14.142a8.963 8.963 0 000-12.728 8.963 8.963 0 00-12.728 0 8.963 8.963 0 000 12.728 8.963 8.963 0 0012.728 0zM8.319 15.301a.359.359 0 00-.067-.119c-.07-.07-.07-.212-.07-.354V9.172c0-.566.424-.99.99-.99.565 0 .99.424.99.99v3.252l3.96-3.96c.424-.424.99-.424 1.414 0 .424.425.424.99 0 1.415l-3.96 3.96h3.252c.566 0 .99.424.99.99 0 .282-.07.494-.282.707-.213.212-.425.282-.708.282H9.172c-.142 0-.283 0-.354-.07-.141 0-.283-.142-.354-.212a.653.653 0 01-.145-.235z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#arrow-down-left-circle_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgArrowDownLeftCircle;
