import CircularProgress from '@mui/joy/CircularProgress';


import React from "react";

export interface Cards {
    color: string;
    title: string;
    info: any;
    shade: any;
    values: any;
    progress: number;

}
function hexToRgba(hex: string, alpha: number = 0.4): string {

    let sanitizedHex: string ="";
    if (hex && typeof (hex) == "string") {  sanitizedHex = hex.replace('#', ''); }

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

function CardsItem(props: Cards) {

    return (
        <div className="grid border-[#180a0a07] border-[0.2px] shadow-md sm:grid-cols-2 rounded-md transition-c-0.5   dark:bg-[#182644] bg-white p-[20px] ">

            <div className=" ml-[-0rem] grid w-44  gap-0 ">
                <h4 className=" card-text transition-c-0.5 text-black dark:text-white">{props.info}</h4>
                {props.values && <h4 className=" card-text transition-c-0.5 text-black dark:text-white">{props.values}€</h4>}
                <h4 className="mb-4 card-text transition-c-0.5 text-black dark:text-white">{props.title}</h4>


            </div>
            <div className='flex justify-end'>
                <CircularProgress

                    size="md"
                    thickness={7}
                    determinate
                    value={props.progress}
                    variant="soft"
                    sx={{
                        '--CircularProgress-trackColor': hexToRgba(props.color),
                        '--CircularProgress-progressColor': props.color,

                    }
                    }


                />
            </div>

        </div>
    );
}

export default CardsItem;
