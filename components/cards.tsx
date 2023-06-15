import React from "react";

import CardsItem from "./cards-item";

const cards = [
    { title: "Total Registered", color: "bg-[#934286]", values: "2,868" },
    { title: "With open Vouchers", color: "bg-[#F37500]", values: "895" },
    { title: "With used Voucher", color: "bg-[#FEE501]", values: "368" },
    { title: "Active Payers", color: "bg-[#35B769]", values: "1,605" },
];


function Cards() {
    return (<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 bg-[#DAE8FA] p-[23px] ">

        {cards.map((cards, index) => (
            <CardsItem

                title={cards.title}
                color={cards.color}
                values={cards.values}
            />
        ))} </div>
    );
}

export default Cards;
