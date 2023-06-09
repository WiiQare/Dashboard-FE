import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export interface cards {
    color: any;
    title: string;
    values: string;
}

function CardsItem(props: cards) {
    const router = useRouter();

    return (

        <div className="flex flex-row items-center gap-4 rounded-sm   ">
            <div className={`circle `+props.color+" flex h-11.5 w-11.5 items-center justify-center rounded-full "}>

            </div>

            <div className="mt-4 flex items-end justify-between">
                <div className="mt-[-22px]">
                    <h4 className="title-box dark:text-white">
                       {props.title}
                    </h4>
                    <span className="number-title">{props.values}</span>
                </div>
            </div>
        </div>
    );
}

export default CardsItem;
