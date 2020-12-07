import * as React from 'react';
import Svg, { SvgProps, Path, Mask } from 'react-native-svg';

function SvgStellar(props: SvgProps) {
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
        d="M23.998 3.442V2.91L3.766 12.984a7.949 7.949 0 01.021-2.278c.221-1.416.776-2.698 1.7-3.815 1.578-1.905 3.629-2.937 6.135-3.073a8.165 8.165 0 014.342.972c.074.039.13.037.203 0 .4-.202.8-.402 1.202-.601l.476-.238a1.4 1.4 0 00.11-.06 4.482 4.482 0 01-.04-.029l-.069-.05c-2.44-1.636-5.104-2.165-7.993-1.584-1.778.357-3.335 1.163-4.678 2.353a9.853 9.853 0 00-2.522 3.466 9.128 9.128 0 00-.774 3.19c-.018.357-.012.717-.006 1.076l.006.426c.006.767-.336 1.332-1.027 1.694a20.89 20.89 0 01-.746.371c-.077.037-.107.077-.106.163.003.464.003.927.003 1.39v.404a.918.918 0 00.006.113l.054-.024.067-.032 4.215-2.099 14.662-7.3c1.623-.811 3.248-1.62 4.875-2.425.09-.045.12-.095.118-.191-.004-.335-.003-.67-.003-1.005v-.356zm0 4.91V6.964a8.799 8.799 0 01-.047.022l-.083.04-12.012 5.98C7.952 14.95 4.047 16.894.14 18.834c-.108.054-.142.112-.14.228.004.424.004.848.003 1.272v.597l20.221-10.069.009.02c.004.01.007.017.008.024.104.851.082 1.698-.083 2.54a7.797 7.797 0 01-1.88 3.785c-1.56 1.733-3.528 2.67-5.886 2.797a8.199 8.199 0 01-4.366-.975c-.067-.036-.119-.042-.19-.005-.405.204-.811.406-1.217.608l-.473.236a1.173 1.173 0 00-.108.06 10.305 10.305 0 007.526 1.774 10.015 10.015 0 004.147-1.6 9.912 9.912 0 003.408-3.844 9.622 9.622 0 00.98-3.358c.062-.6.046-1.2.025-1.803-.028-.787.335-1.362 1.048-1.727.243-.125.489-.247.736-.365.069-.033.094-.072.09-.147-.003-.126-.003-.251-.002-.377v-.153z"
        clipRule="evenodd"
      />
      <Mask id="stellar_svg__a" width={24} height={20} x={0} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M23.998 3.442V2.91L3.766 12.984a7.949 7.949 0 01.021-2.278c.221-1.416.776-2.698 1.7-3.815 1.578-1.905 3.629-2.937 6.135-3.073a8.165 8.165 0 014.342.972c.074.039.13.037.203 0 .4-.202.8-.402 1.202-.601l.476-.238a1.4 1.4 0 00.11-.06 4.482 4.482 0 01-.04-.029l-.069-.05c-2.44-1.636-5.104-2.165-7.993-1.584-1.778.357-3.335 1.163-4.678 2.353a9.853 9.853 0 00-2.522 3.466 9.128 9.128 0 00-.774 3.19c-.018.357-.012.717-.006 1.076l.006.426c.006.767-.336 1.332-1.027 1.694a20.89 20.89 0 01-.746.371c-.077.037-.107.077-.106.163.003.464.003.927.003 1.39v.404a.918.918 0 00.006.113l.054-.024.067-.032 4.215-2.099 14.662-7.3c1.623-.811 3.248-1.62 4.875-2.425.09-.045.12-.095.118-.191-.004-.335-.003-.67-.003-1.005v-.356zm0 4.91V6.964a8.799 8.799 0 01-.047.022l-.083.04-12.012 5.98C7.952 14.95 4.047 16.894.14 18.834c-.108.054-.142.112-.14.228.004.424.004.848.003 1.272v.597l20.221-10.069.009.02c.004.01.007.017.008.024.104.851.082 1.698-.083 2.54a7.797 7.797 0 01-1.88 3.785c-1.56 1.733-3.528 2.67-5.886 2.797a8.199 8.199 0 01-4.366-.975c-.067-.036-.119-.042-.19-.005-.405.204-.811.406-1.217.608l-.473.236a1.173 1.173 0 00-.108.06 10.305 10.305 0 007.526 1.774 10.015 10.015 0 004.147-1.6 9.912 9.912 0 003.408-3.844 9.622 9.622 0 00.98-3.358c.062-.6.046-1.2.025-1.803-.028-.787.335-1.362 1.048-1.727.243-.125.489-.247.736-.365.069-.033.094-.072.09-.147-.003-.126-.003-.251-.002-.377v-.153z"
          clipRule="evenodd"
        />
      </Mask>
    </Svg>
  );
}

export default SvgStellar;