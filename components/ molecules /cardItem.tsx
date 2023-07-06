import CircularProgress from '@mui/joy/CircularProgress';


import React from "react";

export interface cards {
    color: string;
    title: string;
    values: number;
    shade: any;
}

function CardsItem(props: cards) {

    return (
        <div className="grid border-[#180a0a07] border-[0.2px] shadow-md sm:grid-cols-2 rounded-md transition-c-0.5   dark:bg-[#182644] bg-white p-[20px] ">

            <div className=" ml-[-0rem] grid w-44  gap-0 ">
                <h4 className=" card-text transition-c-0.5 text-black dark:text-white">{props.values}</h4>
                <h4 className="mb-4 card-text transition-c-0.5 text-black dark:text-white">{props.title}</h4>


            </div>
            <div className='flex justify-end'>
                <CircularProgress
                   
                    size="md"
                    thickness={7}
                    determinate
                    value={22}
                    variant="soft"
                    sx={{
                        "--CircularProgress-trackColor":  props.shade,
                        
                    }
                    }


                />
            </div>

        </div>
    );
}

export default CardsItem;
