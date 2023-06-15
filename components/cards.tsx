import React from "react";

import CardsItem from "./cards-item";

const cards = [
    { title: "Total number of Registered", color: "bg-[#934286]", values: "2,868" },
    { title: "Total Purchased Vouchers", color: "bg-[#F37500]", values: "895" },
    { title: "Total Unspent Vouchers", color: "bg-[#FEE501]", values: "368" },
    { title: "Number of active Payers", color: "bg-[#35B769]", values: "1,605" },
    { title: "Number of Vouchers recalled", color: "bg-[#c71313]", values: "1,605" },
];


function Cards() {
    return (<div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 xl:grid-cols-5 2xl:gap-7.5  p-[23px] ">

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
