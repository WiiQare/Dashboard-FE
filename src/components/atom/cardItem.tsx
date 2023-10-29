import CircularProgress from '@mui/joy/CircularProgress';

import React from 'react';

export interface Cards {
  color: string;
  title: string;
  info: any;
  shade: any;
  values: any;
  progress: number;
}
function hexToRgba(hex: string, alpha: number = 0.4): string {
  let sanitizedHex: string = '';
  if (hex && typeof hex == 'string') {
    sanitizedHex = hex.replace('#', '');
  }

  if (sanitizedHex.length === 3) {
    const [r, g, b] = sanitizedHex.split('');
    const fullHex = `${r}${r}${g}${g}${b}${b}`;
    return hexToRgba(fullHex, alpha);
  }

  const decimal = parseInt(sanitizedHex, 16);
  const r = (decimal >> 16) & 255;
  const g = (decimal >> 8) & 255;
  const b = decimal & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
{
  /* <div key={index} className="border-[#180a0a07] border-[0.2px] shadow-md sm:grid-cols-2 items-left rounded-md dark:bg-[#182644] bg-white p-[20px]">
<div className="flex flex-row items-center justify-center h-full space-x-5 animate-pulse dark:bg-[#182644] bg-white">
  <div className="flex-shrink-0 w-12 h-12 rounded-full dark:bg-gray-700 bg-gray-300"></div>
  <div className="flex flex-col space-y-3 w-3/4 md:w-2/3 lg:w-1/2 2xl:w-3/4">
    <div className="w-1/2 h-4 bg-gray-300 rounded-md"></div>
    <div className="w-2/3 h-4 bg-gray-300 rounded-md"></div>
    <div className="w-full h-4 bg-gray-300 rounded-md"></div>
  </div>
</div>
</div> */
}

function CardsItem(props: Cards) {
  return (
    <div className="border-[#180a0a07] border-[0.2px] shadow-md sm:grid-cols-2 items-left rounded-md dark:bg-[#182644] bg-white p-[20px]">
      <div className="flex flex-row items-center justify-center h-full space-x-5 dark:bg-[#182644] bg-white">
        <div className="flex-shrink-0 w-12 h-12 rounded-full">
          <CircularProgress
            size="md"
            thickness={7}
            determinate
            value={props.progress}
            variant="soft"
            sx={{
              '--CircularProgress-trackColor': hexToRgba(props.color),
              '--CircularProgress-progressColor': props.color,
            }}
          />
        </div>
        <div className="flex flex-col space-y-3 w-3/4 md:w-2/3 lg:w-1/2 2xl:w-3/4">
          <h4 className="w-1/2 h-4 transition-c-0.5 text-black dark:text-white">
            {props.info}
          </h4>
          {props.values !== undefined && (
            <h4 className="w-2/3 h-4  transition-c-0.5 text-black dark:text-white">
              {props.values}
            </h4>
          )}
          <h4 className="w-full mb-4  transition-c-0.5 text-black dark:text-white">
            {props.title}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default CardsItem;
