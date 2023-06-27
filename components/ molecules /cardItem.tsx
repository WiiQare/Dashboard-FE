import React from "react";

export interface cards {
    color: any;
    title: string;
    values: number;
}

function CardsItem(props: cards) {

    return (
        <div className="grid  sm:grid-cols-3 rounded-md  transition-c-0.5   dark:bg-[#182644] bg-white p-[20px] ">
            <div
                className={
                    `circle ` +
                    props.color +
                    " h-11.5 w-11.5 flex mt-5 rounded-full "
                }
            ></div>

            <div className=" ml-[-0rem] grid  gap-0 ">
                <h4 className="mb-4 card-text transition-c-0.5 text-black dark:text-white">{props.title}</h4>
                <span className="number-title !text-xl dark:text-cyan-500 mt-1 ml-2 ">{props.values}</span>
            </div>


        </div>
    );
}

export default CardsItem;
